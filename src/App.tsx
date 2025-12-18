import { useState } from "react";
import { useCallback } from "react";

import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { BottomBar } from "./components/index";
import { NotFound } from "./screens/NotFound/index";
import { DeliveryScreen } from "./screens/Delivery/index";
import { AboutUsScreen } from "./screens/AboutUs/index"
// import { ContactsScreen } from "./screens/Contacts/index";

import "./utils/TriggerStyles";
import { styles } from "./utils/Css";

function App()
{
  const [activeTab, setActiveTab] = useState("Delivery");

  const handleTabChange = useCallback((tabName: string) => { setActiveTab(tabName); }, []);

  const renderScreen = () => 
  {
    switch(activeTab) 
    {
      case "Delivery": return <DeliveryScreen/>;
      case "About Us": return <AboutUsScreen/>;
      // case "Contacts": return <ContactsScreen/>;
      default: return <NotFound/>;
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.layout}>
        <View style={{ flex: 1, width: '100%' }}>
          {renderScreen()}
        </View>

        <BottomBar activeTab={activeTab} onTabChange={handleTabChange}/>
      </SafeAreaView>
    </View>
  );
}

export default App;