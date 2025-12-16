import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";

import { styles } from "../../../utils/Css";

type InfoCardProps = 
{
	title: string,
	description: string,
	icon: any
}

function InfoCard({ title, description, icon} : InfoCardProps)
{
	return (
		<View style={styles.delivery__infoCard}>
			<Image style={styles.infoCard__icon} source={icon}/>

			<View style={styles.infoCard__textBlock}>
				<Text style={styles.infoCard__title}>{title}</Text>
				<Text style={styles.infoCard__description}>{description}</Text>
			</View>
		</View>
	);
}

export { InfoCard };