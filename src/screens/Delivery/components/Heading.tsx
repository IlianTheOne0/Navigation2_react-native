import { View } from "react-native";
import { Text } from "react-native";

import { styles } from "../../../utils/Css";

function Heading()
{
	return (
		<View style={styles.layout__block}>
			<Text style={styles.heading}>Terms of delivery</Text>
			<Text style={styles.subheading}>Delivery time from 10a.m – 21p.m</Text>
		</View>
	);
}

export default Heading;