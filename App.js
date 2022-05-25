import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Content from './src/component/content'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    alignItems: "center",
    justifyContent: "center",
  },
});
