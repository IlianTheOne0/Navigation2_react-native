import { View } from "react-native";

import "./utils/TriggerStyles";

import HelloWorld from "./components/HelloWorld";

import { styles } from "./utils/Css";

function App()
{
  return (
    <View style={styles.container}>
      <HelloWorld/>
    </View>
  );
}

export default App;