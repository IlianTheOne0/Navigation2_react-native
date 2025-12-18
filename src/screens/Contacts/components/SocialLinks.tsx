import { View  } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";

import { SafeImage } from "../../../components/index";

import { styles } from "../../../utils/Css";

function SocialLinks() {
	const openLink = (url: string) => Linking.openURL(url).catch(err => console.error("Error", err));

	return (
		<View style={styles.contacts__section}>
			<Text style={[styles.block__sub_heading, { marginBottom: 15 }]}>We in Social Media</Text>
			
			<View style={styles.contacts__socials}>
				<TouchableOpacity onPress={() => openLink('https://instagram.com')}>
					<SafeImage source={{ uri: 'https://img.icons8.com/fluency/48/instagram-new.png' }} style={styles.contacts__socialIcon}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => openLink('https://telegram.org')}>
					<SafeImage source={{ uri: 'https://img.icons8.com/fluency/48/telegram-app.png' }} style={styles.contacts__socialIcon}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => openLink('https://viber.com')}>
					<SafeImage source={{ uri: 'https://img.icons8.com/color/48/viber.png' }} style={styles.contacts__socialIcon}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default SocialLinks;