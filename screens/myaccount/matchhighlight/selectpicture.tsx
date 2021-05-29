import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

let camera: Camera

interface Props {
  navigation: any;
}

export default class SelectPicture extends React.Component<Props> {

  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    pickingImage: false,
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({
      cameraType: cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
  }

  takePicture = async () => {
    let photo = await camera.takePictureAsync();
    if (photo) this.submitPicture();
  }

  pickImage = async () => {
    this.setState({
      pickingImage: true
    })
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    if (result.cancelled === false) this.submitPicture();
    else this.setState({ 
      pickingImage: false 
    })
  }
  
  submitPicture = async () => {
    const res = 'd31BBuz7ApQ';
    this.props.navigation.navigate('MatchHighlight', { videoId: res });
  }

  render(){
    const { hasPermission } = this.state
    if (hasPermission === null || this.state.pickingImage) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={(ref: Camera) => {camera = ref}}>
            <View style={styles.cameraView}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.pickImage}>
                <FontAwesome
                    name="photo"
                    style={styles.buttonIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.takePicture}
                >
                <FontAwesome
                    name="camera"
                    style={styles.buttonIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleCameraType}
                >
                <MaterialCommunityIcons
                    name="camera-switch"
                    style={styles.buttonIcon}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonIcon: {
    color: "#fff", 
    fontSize: 40,
  },
  cameraView: {
    flex:1, 
    flexDirection:"row",
    justifyContent:"space-between",
    margin:30
  },
})