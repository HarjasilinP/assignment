import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Page = () => {


  return (
    <View>
      <Text style={styles.text}>Details About Post</Text>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 15, color: 'black' }}>
          Post Id:1
        </Text>
        <Text style={{ fontSize: 15, color: 'black' }}>Title: hjkfhjfh hkdsbjkhjk</Text>
        <Text style={{ fontSize: 15, color: 'black', }}
          numberOfLines={1}
        >
          Body: hjkfhjfh hkdsbjkhjk jfhfhfhkfbh hgyugjjhjhbjghg hjgbjfghfuhruhwriu gghjffghjfhgvj
        </Text>
      </View>
      <View style={{margin:20}}>
<Text style={styles.text}>
Comments
</Text>
      </View>
      
      <TouchableOpacity
      style={styles.box}>
        <Text>Name:harz</Text>
        <Text>Body: hjkfhjfh hkdsbjkhjk</Text>
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

export default Page;
