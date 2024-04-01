import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';

import Input from '../components/input';
import Button from '../components/Button/Button';
import {text} from 'cheerio';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }
    const user = {
      userName,
      userSurName,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üyenin İsmini Giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üyenin Soyadını Giriniz..."
        onChangeText={setUserSurName}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin Yaşını Giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye Eposta"
        placeholder="Üyenin Eposta Adresini Giriniz... "
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin Memleketini Giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
