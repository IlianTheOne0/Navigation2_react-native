import { SafeAreaView } from "react-native-safe-area-context";

import Heading from "./components/Heading";
import MapBlock from "./components/MapBlock";
import PaymentOptions from "./components/PaymentOptions";
import TypesOfOrders from "./components/TypesOfOrders";

import "./assets/styles/TriggerStyles";
import { styles } from "../../utils/Css";

function Layout()
{
	return (
		<SafeAreaView style={styles.layout}>
			<Heading/>

			<MapBlock/>

			<TypesOfOrders/>
			<PaymentOptions/>
		</SafeAreaView>		
	);
}

export default Layout;