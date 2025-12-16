import { View } from "react-native";
import { Text } from "react-native";

import { InfoCard } from "./InfoCard";

import { styles } from "../../../utils/Css";

function TypesOfOrders()
{
	return (
		<View style={[styles.layout__block, styles.infoCards__section]}>
			<Text style={styles.block__heading}>Types of orders</Text>

			<InfoCard title="Standard Delivery" description="Delivery within 3-5 business days. Free for orders over $50" icon={{ uri: 'https://img.icons8.com/color/96/delivery.png' }}/>
			<InfoCard title="Express Delivery" description="Delivery within 1-2 business days. Additional fee applies" icon={{ uri: 'https://img.icons8.com/color/96/shipped.png' }}/>
			<InfoCard title="In-Store Pickup" description="Pick up your order at the nearest store. Ready within 2 hours" icon={{ uri: 'https://img.icons8.com/color/96/shop.png' }}/>
		</View>
	);
}

export default TypesOfOrders;