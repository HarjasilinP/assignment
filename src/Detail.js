import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Detail = props => {
  const [posts, setPosts] = useState(0);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);
  console.log('posts', posts);
  return (
    <SafeAreaView>
      <Text style={styles.text}>List of Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Page', {id: item.id})}
                style={styles.box}>
                <Text>Post Id:{item.id}</Text>
                <Text>Title: {item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  box: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 10,
    
  },
});

export default Detail;
