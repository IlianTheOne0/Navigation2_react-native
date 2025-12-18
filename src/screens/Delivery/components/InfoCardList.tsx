import { View} from "react-native";
import { Text } from "react-native";

import { InfoCard, InfoCardProps } from "./InfoCard";

import { styles } from "../../../utils/Css";

type InfoCardListProps =
{
	heading: string;
	data: InfoCardProps[];
};

function InfoCardList({ heading, data }: InfoCardListProps)
{
	return (
		<View style={[styles.layout__block, styles.infoCards__section]}>
			<Text style={styles.block__heading}>{heading}</Text>
			
			{
				data.map
				(
					(item, index) => (<InfoCard key={`${item.title}-${index}`} title={item.title} description={item.description} icon={item.icon}/>)
				)
			}
		</View>
	);
}

export default InfoCardList;