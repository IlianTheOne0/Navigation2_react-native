import { SafeAreaView } from "react-native-safe-area-context";

import Heading from "./components/Heading";
import MapView from "./components/MapView";
import PaymentOptions from "./components/PaymentOptions";
import TypesOfOrders from "./components/TypesOfOrders";

import { styles } from "../../utils/Css";

function Layout()
{
	return (
		<SafeAreaView style={styles.layout}>
			<Heading/>

			<MapView/>

			<TypesOfOrders/>
			<PaymentOptions/>
		</SafeAreaView>		
	);
}

export default Layout;