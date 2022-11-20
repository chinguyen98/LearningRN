import React from 'react';
import { Button, Text, SafeAreaView, Image, TextInput } from 'react-native';
import styles from './homeScreenStyle';
import { SparklesIcon } from 'react-native-heroicons/solid';

const HomeScene = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-red-500 my-3 italic">Ecec sss</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <SparklesIcon style={styles.svg} />
      <Button title="ecec" />
      <TextInput
        className="mt-5"
        style={styles.keyboard}
        placeholder="tada"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

export default HomeScene;
