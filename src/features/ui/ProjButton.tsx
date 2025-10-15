import { Pressable, Text } from "react-native-web";
import {StyleSheet, type StyleProp, type ViewStyle} from 'react-native';

export {ProjButtonTypes, ProjButton};

enum ProjButtonTypes {
    primary,
    secondary,
    success,
    danger,
    warning, 
    dark,
    info
}

export default function ProjButton({type, action, title, style} : 
    {type: ProjButtonTypes, action: () => void, title: string, style?: StyleProp<ViewStyle>})
{
    let btnStyle;
    switch(type)
    {
        case ProjButtonTypes.secondary: btnStyle = styles.secondary; break;
        case ProjButtonTypes.success: btnStyle = styles.success; break;
        case ProjButtonTypes.danger: btnStyle = styles.danger; break;
        case ProjButtonTypes.warning: btnStyle = styles.warning; break;
        case ProjButtonTypes.dark: btnStyle = styles.dark; break;
        case ProjButtonTypes.info: btnStyle = styles.info; break;
        default: btnStyle = styles.primary;
    };

    return <Pressable onPress={action} style={style}>
        <Text style={[styles.button, btnStyle]}>{title}</Text>
    </Pressable>;
}

const styles = StyleSheet.create({
    "button":
    {
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: 700,
        paddingHorizontal:15,
        paddingVertical: 8,
        textAlign: "center"
    },
    "primary" : 
    {
        backgroundColor: "#0d6efd",
        color: "azure",
        borderColor: "#0d6efd"
    },
    "secondary":
    {
        backgroundColor: "#6c757d",
        color: "white",
        borderColor: "#6c757d"
    },
    "success":
    {
        backgroundColor: "#198754",
        color: "white",
        borderColor: "#198754"
    },
    "danger" : 
    {
        backgroundColor: "#dc3545",
        color: "azure",
        borderColor: "#dc3545"
    },
    "warning":
    {
        backgroundColor: "#ffc107",
        color: "white",
        borderColor: "#ffc107"
    },
    "dark":
    {
        backgroundColor: "#212529",
        color: "white",
        borderColor: "#212529"
    },
    "info":
    {
        backgroundColor: "#0dcaf0",
        color: "white",
        borderColor: "#0dcaf0"
    },
});