import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { DeliveryScreen } from "./screens/Delivery/index";

import "./utils/TriggerStyles";

import { styles } from "./utils/Css";

function App()
{
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.layout}>
        <DeliveryScreen/>
      </SafeAreaView>
    </View>
  );
}

export default App;