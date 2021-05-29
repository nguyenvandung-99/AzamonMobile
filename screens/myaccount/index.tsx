import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';

const options = [
  {
    id: '1',
    link: 'MatchHighlight',
    title: "Match Highlight",
  },
  {
    id: '2',
    link: 'MyAccountScreen',
    title: "My Players",
  },
  {
    id: '3',
    link: 'MyAccountScreen',
    title: "Settings",
  }
]

export default function MyAccountScreen({ navigation }: any) {

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.item} activeOpacity={0.5}>
      <Text 
        style={styles.title} 
        onPress={() => directTo(item.link)}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const directTo = (link: string) => {
    navigation.navigate(link)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#bed",
    width: Dimensions.get('window').width * 0.90,
  },
});
