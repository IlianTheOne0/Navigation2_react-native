import { StyleSheet, Text, View } from 'react-native';

function App()
{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create
(
  {
    container:
    {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:
    {
      color: '#fff',
      fontSize: 24,
    }
  }
);

export default App;