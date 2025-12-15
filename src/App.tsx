import { View } from "react-native";

import { DeliveryScreen } from "./screens/Delivery/index";

import "./utils/TriggerStyles";

import { styles } from "./utils/Css";

function App()
{
  return (
    <View style={styles.container}>
      <DeliveryScreen/>
    </View>
  );
}

export default App;