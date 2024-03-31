import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

function First({navigation}) {
  console.log(navigation);
  function navigateToPage() {
    navigation.navigate('SecondScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello First</Text>
      <Button title="Go to Second" onPress={navigateToPage} />
    </SafeAreaView>
  );
}

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
