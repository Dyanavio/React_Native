import { Text, View } from "react-native-web";
import { StyleSheet } from "react-native"
import type { ToastData } from "../../features/types/ToastData";

export default function Toast({data}: {data: ToastData|null})
{
    return data == null ? null : 
    <View style={styles.toast}>
        <Text style={styles.message}>{data.message}</Text>
    </View>
}

const styles = StyleSheet.create({
    toast:{
        padding: 10,
        backgroundColor: "#888888",
        borderRadius: 10,
        position: "absolute",
        bottom: 30,
        zIndex: 1,
        width: "30%",
        left: "35%"
    },
    message: {
        textAlign: "center"
    }
});