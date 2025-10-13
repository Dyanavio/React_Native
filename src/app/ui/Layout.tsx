import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";
import { Link, Outlet } from "react-router-dom";

export default function Layout()
{
    return <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.navBar}>
            <Link style={styles.navLink} to="/"><Text>Home</Text></Link>
            <Link style={styles.navLink} to="/privacy"><Text>Privacy</Text></Link>
            <Link style={styles.navLink} to="/about"><Text>About</Text></Link>
          </View>
          <View style={styles.navBar}>
            <Link style={styles.navLink} to="/"><Text>Register</Text></Link>
            <Link style={styles.navLink} to="/"><Text>Log In</Text></Link>
          </View>
        </View>
        <View style={styles.main}><Outlet/></View>
        <View style={styles.footer}>
            <Text>&copy; React, 2025</Text>
        </View>
    </View>;
}


const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "100vh"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "lightblue",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  navBar:
  {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
  },
  navLink: {
    paddingHorizontal: 5,
    marginHorizontal: 10,
    textDecorationLine: "none",
    border: "0px solid transparent",
    borderRadius: 5,
    backgroundColor: "azure",
    padding: 5
  },
  
  main:{
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1
  },
  footer:{
    backgroundColor: "lightblue",
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});
