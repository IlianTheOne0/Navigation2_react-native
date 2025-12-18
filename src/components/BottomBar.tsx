const tabs = require("../assets/data/tabs.json");

import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { SafeImage } from "./index";

import { styles } from "../utils/Css";

type BottomBarProps =
{
	activeTab: string;
	onTabChange: (tab: string) => void;
};

const getIconUrl = (iconName: string) =>
{
	return `https://img.icons8.com/fluency/48/${iconName ?? "moon"}.png`;
};

function BottomBar({ activeTab, onTabChange }: BottomBarProps) {
	return (
		<View style={styles.bottomBar}>
			{
				tabs.map
				(
					(tab: any) =>
					{
						const isActive = activeTab === tab.title;
						return (
							<TouchableOpacity key={tab.title} style={styles.bottomBar__tab} onPress={() => onTabChange(tab.title)} activeOpacity={0.7}>
								<SafeImage source={{ uri: getIconUrl(tab.icon) }} style={[styles.bottomBar__icon, { opacity: isActive ? 1 : 0.5 }]}/>
								<Text style={[styles.bottomBar__text, { color: isActive ? '#fff' : '#777' }]}>
									{tab.title}
								</Text>
							</TouchableOpacity>
						);
					}
				)
			}
		</View>
	);
}

export default BottomBar;