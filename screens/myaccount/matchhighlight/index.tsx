import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, View } from '../../../components/Themed';
import YoutubePlayer from "react-native-youtube-iframe";

export default function MyAccountScreen({ navigation, route }: any) {

  const [videoId, setVideoId] = useState(route.params ? route.params.videoId : '')

  useEffect(() => {
    setVideoId(route.params ? route.params.videoId : '')
  })

  return (
    <View style={styles.container}>
      {videoId ?
        <YoutubePlayer
          height={300}
          videoId={videoId}
        />
        :
        <View style={styles.centerItems}>
          <Text style={styles.text}>
            Tap on "Scan a shirt" to take a picture or select from the gallery
          </Text>
        </View>
      }
      <View style={styles.centerItems}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectPicture')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Scan a shirt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width * 0.70,
    marginHorizontal: 'auto',
    fontSize: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  centerItems: {
    alignItems: 'center',
  },
});
