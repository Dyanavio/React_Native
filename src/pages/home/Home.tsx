import { useContext } from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import AppContext from '../../features/context/AppContext';

export default function Home() {
  const {showModal} = useContext(AppContext);
  const onShowPress = () =>
  {
    showModal({
      message: "Hello there"
    });
  };

  return  <View style={styles.root}>
      <Text>Hello there</Text>
      <Pressable onPress={onShowPress}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "inherit",
  }
});
