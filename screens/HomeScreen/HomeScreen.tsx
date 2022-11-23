import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SparklesIcon } from 'react-native-heroicons/solid';
import styles from './homeScreenStyle';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-red-500 my-3 italic">Ecec sss</Text>
      <Image
        className="rounded"
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
      <TouchableOpacity>
        <Text className="text-red-500 bg-pink-500 p-5">Hit me!</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
        <Image
          className="rounded"
          style={styles.tinyLogo}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
