import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";

import { SafeImage } from "../../../components/index";

import { styles } from "../../../utils/Css";

function ContactLinks()
{
	const openLink = (url: string) => Linking.openURL(url).catch(err => console.error("Error", err));

	return (
		<View style={styles.contacts__section}>
			<Text style={[styles.block__sub_heading, { marginBottom: 15 }]}>Call Us</Text>
			
			<TouchableOpacity style={styles.contacts__row} onPress={() => openLink('tel:+1234567890')}>
				<SafeImage source={{ uri: 'https://img.icons8.com/color/48/phone.png' }} style={styles.contacts__icon}/>
				<Text style={styles.contacts__text}>+1 (234) 567-890</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.contacts__row} onPress={() => openLink('tel:+0987654321')}>
				<SafeImage source={{ uri: 'https://img.icons8.com/color/48/phone.png' }} style={styles.contacts__icon}/>
				<Text style={styles.contacts__text}>+0 (987) 654-321</Text>
			</TouchableOpacity>
		</View>
	);
}
export default ContactLinks;