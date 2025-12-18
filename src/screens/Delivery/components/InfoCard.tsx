import { useState } from "react";

import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { ImageSourcePropType } from "react-native";

import DefaultIcon from "../assets/images/default-icon.svg";

import { styles } from "../../../utils/Css";


type InfoCardProps = 
{
	title: string,
	description: string,
	icon: ImageSourcePropType
}

function InfoCard({ title, description, icon} : InfoCardProps)
{
	const [imageError, setImageError] = useState(false);

	if (!title || !description) { return null; }
	
	return (
		<View style={styles.delivery__infoCard}>
			{
				imageError ?
				(<DefaultIcon width={50} height={50} style={styles.infoCard__icon}/>)
				:
				(<Image style={styles.infoCard__icon} source={icon} onError={() => setImageError(true)}/>)
			}

			<View style={styles.infoCard__textBlock}>
				<Text style={styles.infoCard__title}>{title}</Text>
				<Text style={styles.infoCard__description}>{description}</Text>
			</View>
		</View>
	);
}

export { InfoCard, InfoCardProps };