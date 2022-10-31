import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, TextBase } from 'react-native';

export default function App() {
  return (
    <View >
    <View styles={styles.container}>
    <TextInput  placeHolder= 'ADD'styles={styles.input}  />
      <Button title='agregar'/>
      </View>
      <View >
      <Text styles={styles.text}>item1</Text>
      <Text styles={styles.text}>item2</Text>
      <Text styles={styles.text}>item3</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
justifyContent: 'center',
  },
input:{
margin:50,
},
text:{
  color:'red',
  backgroundColor:'black',
}
});
