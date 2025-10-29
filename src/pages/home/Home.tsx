import {StyleSheet, View} from 'react-native';
import ProductGroupsWidget from '../../widgets/product_groups/ProductGroupsWidget';
import { useContext } from 'react';
import AppContext from '../../features/context/AppContext';
import ProjButton, { ProjButtonTypes } from '../../features/ui/ProjButton';


export default function Home() {
  const {enqueueToast} = useContext(AppContext);

  return  <View style={styles.root}>
      <ProductGroupsWidget/>

       <ProjButton type={ProjButtonTypes.secondary} 
          action={() => enqueueToast({message: Math.random().toFixed(3).toString()})} 
          title='Show Toast' style={{maxWidth: 150, width: "20%"}}/>

      

      {/*
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
      */}
      
    </View>
  
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "inherit",
  }
});
