import { useContext } from "react";
import type { ModalData } from "../../features/types/ModalData";
import { Image, Text, View } from "react-native-web";
import AppContext from "../../features/context/AppContext";
import ProjButton, { ProjButtonTypes } from "../../features/ui/ProjButton";
import {Pressable, StyleSheet} from 'react-native';

export default function ModalView({data} : {data: ModalData | null})
{
  const {showModal} = useContext(AppContext);
  const loop = [];

  if(data?.buttons)
  {
    for(let i = 0; i < data?.buttons.length; i++)
    {
      loop.push(
        <ProjButton key={data?.buttons[i].title} style={styles.modalButton} type={data?.buttons[i].type} title={data?.buttons[i].title} action={() => {
          if(data?.buttons)  data?.buttons[i].action();
          showModal(null);
        }}/>
      );
    }
  }
  

  return <View style={[styles.fullScreen, {display: (data == null ? 'none' : 'flex')}]}>
    <View style={styles.modal}>
      <Pressable style={styles.closeButton} onPress={() => showModal(null)}>
        <Image style={styles.closeButtonImg}  source="/img/close.png"/>
      </Pressable>

        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.message}>{data?.message}</Text>

        <View style={styles.buttonContainer}>
          {loop}
        </View>

        <ProjButton style={styles.closeButtonBottom} type={ProjButtonTypes.secondary} title="Close" action={() => showModal(null)}/>
    </View>
  </View>
}


const styles = StyleSheet.create({
  fullScreen: {
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: "#88b0b0b0",
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  },
  modal:
  {
    paddingTop: 40,
    width: "30%",
    height: "30%",
    backgroundColor: "rgba(134, 134, 134, 0.69)",
    borderRadius: 15,
    border: "1px solid",
    borderColor: "#0f0f0f"
  },
  buttonContainer:
  {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    gap: 5,
    flexWrap: "wrap"
  },
  modalButton:
  {
    width: "30%",
    height: 30,
    marginEnd: 5,
    marginBottom: 10
  },
  closeButton:
  {
    width: 40,
    height: 40,
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 2,
  },
  closeButtonBottom:
  {
    width: "40%",
    alignSelf: "center",
    marginBottom: 15,
    marginTop: 15
  },
  closeButtonImg:
  {
    width: 20,
    height: 20,
    position: "absolute",
    top: 5,
    right: 5,
  },
  title:
  {
    fontWeight: 800,
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  message:
  {
    textAlign: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "white"
  }
});
