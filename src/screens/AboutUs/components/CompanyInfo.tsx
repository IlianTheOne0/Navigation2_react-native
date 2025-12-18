import { View } from "react-native";
import { Text } from "react-native";

import { styles } from "../../../utils/Css";

function CompanyInfo()
{
	return (
		<>
			<View style={styles.layout__block}>
				<Text style={styles.block__heading}>About Company</Text>
			</View>
			<View style={styles.about__textContainer}>
				<Text style={styles.about__text}>
					We are the leading delivery service provider in the region. 
					Founded in 2020, our mission is to connect people with the best products 
					from their favorite local stores efficiently and reliably.
				</Text>
			</View>
		</>
	);
}
export default CompanyInfo;