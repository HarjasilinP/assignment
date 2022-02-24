import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
const Detail = (props) => {
return (
    <View>
      <Text style={styles.text}>List of Posts</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Page')}
      style={styles.box}>
        <Text>Post Id:1</Text>
        <Text>Title: hjkfhjfh hkdsbjkhjk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  box: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 10
  }
});

export default Detail;
