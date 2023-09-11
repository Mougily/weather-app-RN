import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "pink",
      flex: 1,
      alignItems: "center",
    },
    wrapper: {
      flex: 1,
    },

    temp: {
      color: "black",
      fontSize: 48,
    },

    feels: {
      fontSize: 48,
      color: "black",
    },

    highLow: {
      color: "black",
      fontSize: 20,
    },
    highLowWrapper: {
      flexDirection: "row",
    },
    bodyWrapper: {
      justifyContent : 'flex-end',
      alignItems: 'flex-end',
    },
    description : {
      fontSize: 48,
    },
    message : {
     fontSize : 30,
    }
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text stlye={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}> <Text style={styles.highLow}>High : 8    </Text>
        <Text style={styles.highLow}>Low: 6</Text></View>
       <View style={styles.bodyWrapper}>
        <Text style={styles.description} >It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
       </View>
      </View>
    </SafeAreaView>
  );
}
