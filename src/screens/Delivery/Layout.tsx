import { ScrollView } from "react-native";

import Heading from "./components/Heading";
import MapBlock from "./components/MapBlock";
import PaymentOptions from "./components/PaymentOptions";
import TypesOfOrders from "./components/TypesOfOrders";

import "./utils/TriggerStyles";
import { styles } from "../../utils/Css";

function Layout()
{
	return (
		<ScrollView style={styles.layout__scrollView} contentContainerStyle={styles.scrollView_content} showsVerticalScrollIndicator={false}>
			<Heading/>

			<MapBlock/>

			<TypesOfOrders/>
			<PaymentOptions/>
		</ScrollView>	
	);
}

export default Layout;