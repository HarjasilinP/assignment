import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Page = props => {
  console.log(props.route.params.id, 'props');
  const [data, setData] = useState('');
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + props.route.params.id)
      .then(response => response.json())
      .then(json => setData(json));
    fetch(
      'https://jsonplaceholder.typicode.com/posts/' +
        props.route.params.id +
        '/comments',
    )
      .then(response => response.json())
      .then(json => setComments(json));
  }, []);
  console.log('Data', comments);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>Details About Post</Text>
      <View style={styles.margin}>
        <Text style={styles.text2}>Post Id:{data.id}</Text>
        <Text style={styles.text2}>Title: {data.title}</Text>
        <Text style={styles.text2} numberOfLines={1}>
          Body: {data.body}
        </Text>
      </View>

      <View style={styles.margin}>
        <Text style={styles.text}>Comments</Text>
      </View>

      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        style={styles.flat}
        renderItem={({item}) => {
          return (
            <View style={styles.box}>
              <Text>Name:{item.name}</Text>
              <Text>Comment :{item.body}</Text>
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
  text2: {
    fontSize: 15,
    color: 'black',
  },
  margin: {
    margin: 20,
  },
  flat: {
    paddingBottom: 20,
    marginBottom: 30,
  },
});

export default Page;
