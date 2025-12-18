import { View } from "react-native";
import { Text } from "react-native";
import { ImageSourcePropType } from "react-native";

import { SafeImage } from "../../../components/index";

import { styles } from "../../../utils/Css";


type InfoCardProps = 
{
	title: string,
	description: string,
	icon: ImageSourcePropType
}

function InfoCard({ title, description, icon} : InfoCardProps)
{
	if (!title || !description) { return null; }
	
	return (
		<View style={styles.delivery__infoCard}>
			<SafeImage source={{ uri: `https://img.icons8.com/color/96/${icon}.png`}} style={styles.infoCard__icon}/>

			<View style={styles.infoCard__textBlock}>
				<Text style={styles.infoCard__title}>{title}</Text>
				<Text style={styles.infoCard__description}>{description}</Text>
			</View>
		</View>
	);
}

export { InfoCard, InfoCardProps };