import { View } from "react-native";
import { Text } from "react-native";

import { InfoCard } from "./InfoCard";

import { styles } from "../../../utils/Css";

function PaymentOptions()
{
	return (
		<View style={[styles.layout__block, styles.infoCards__section]}>
			<Text style={styles.block__heading}>Payment Options</Text>

			<InfoCard title="Credit Card" description="Pay with your credit card securely" icon={{ uri: 'https://img.icons8.com/color/96/visa.png' }}/>
			<InfoCard title="Apple Pay" description="Pay quickly with Apple Pay" icon={{ uri: 'https://img.icons8.com/color/96/apple-pay.png' }}/>
			<InfoCard title="Cash" description="Pay with cash upon delivery" icon={{ uri: 'https://img.icons8.com/color/96/cash-in-hand.png' }}/>
		</View>
	);
}

export default PaymentOptions;