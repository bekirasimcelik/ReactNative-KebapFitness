import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

function Second({navigation}) {
  console.log(navigation);

  function backToFirst() {
    navigation.goBack();
  }
  return (
    <SafeAreaView>
      <Text>Hello Second</Text>
      <Button title="Go Back" onPress={backToFirst} />
    </SafeAreaView>
  );
}

export default Second;
