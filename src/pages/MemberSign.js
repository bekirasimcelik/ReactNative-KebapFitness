import React from 'react';
import {SafeAreaView} from 'react-native';

import Input from '../components/input';
import Button from '../components/Button/Button';

function MemberSign() {
  return (
    <SafeAreaView>
      <Input label="Üye Adı" placeholder="Üyenin İsmini Giriniz..." />
      <Input label="Üye Soyadı" placeholder="Üyenin Soyadını Giriniz..." />
      <Input label="Üye Yaşı" placeholder="Üyenin Yaşını Giriniz..." />
      <Input
        label="Üye Eposta"
        placeholder="Üyenin Eposta Adresini Giriniz..."
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin Memleketini Giriniz..."
      />
      <Button text="Kaydı Tamamla" onPress={null} />
    </SafeAreaView>
  );
}

export default MemberSign;
