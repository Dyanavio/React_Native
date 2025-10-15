import { useContext } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppContext from '../../features/context/AppContext';
import {ProjButton, ProjButtonTypes} from '../../features/ui/ProjButton';

export default function Home() {
  const {showModal} = useContext(AppContext);
  //const onShowPress = () =>
  //{
  //  showModal({
  //    title: "Header",
  //    message: "Short message"
  //  });
  //};

  return  <View style={styles.root}>
      <Text>Hello there</Text>

      <ProjButton type={ProjButtonTypes.primary} 
          action={() => showModal({title: "Three buttons", message: "Three buttons", 
            buttons: [{
              title: "A",
              action: () => console.log("A"),
              type: ProjButtonTypes.secondary
            },
            {
              title: "B",
              action: () => console.log("B"),
              type: ProjButtonTypes.primary
            },
            {
              title: "C",
              action: () => console.log("C"),
              type: ProjButtonTypes.success
            }
          ]})} 
          title='Show Modal' style={{maxWidth: 150, width: "20%"}}/>

      <ProjButton type={ProjButtonTypes.secondary} 
          action={() => showModal({title: "IchTutNet", message: "No buttons"})} 
          title='Show Modal' style={{maxWidth: 150, width: "20%"}}/>

      <ProjButton type={ProjButtonTypes.success} 
          action={() => showModal({title: "Ten buttons", message: "Ten buttons", buttons: [
            {
              title: "A",
              action: () => console.log("A"),
              type: ProjButtonTypes.secondary
            },
            {
              title: "B",
              action: () => console.log("B"),
              type: ProjButtonTypes.primary
            },
            {
              title: "C",
              action: () => console.log("C"),
              type: ProjButtonTypes.success
            },{
              title: "D",
              action: () => console.log("D"),
              type: ProjButtonTypes.danger
            },
            {
              title: "E",
              action: () => console.log("E"),
              type: ProjButtonTypes.warning
            },
            {
              title: "F",
              action: () => console.log("F"),
              type: ProjButtonTypes.dark
            },
            {
              title: "G",
              action: () => console.log("G"),
              type: ProjButtonTypes.info
            },
            {
              title: "H",
              action: () => console.log("H"),
              type: ProjButtonTypes.success
            },
            {
              title: "I",
              action: () => console.log("I"),
              type: ProjButtonTypes.secondary
            },
            {
              title: "J",
              action: () => console.log("J"),
              type: ProjButtonTypes.dark
            }
          ]})} 
          title='Show Modal' style={{maxWidth: 150, width: "20%"}}/>
    </View>
  
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "inherit",
  }
});
