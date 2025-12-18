import { useState } from "react";

import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { LayoutAnimation } from "react-native";
import { Platform } from "react-native";
import { UIManager } from "react-native";

import { SafeImage } from "../../../components/index";

import { styles } from "../../../utils/Css";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) { UIManager.setLayoutAnimationEnabledExperimental(true); }

function AddressAccordion()
{
	const [showDetails, setShowDetails] = useState(false);
	const toggleDetails = () => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setShowDetails(!showDetails); };

	return (
		<View style={[styles.layout__block, { width: '90%' }]}>
			<TouchableOpacity onPress={toggleDetails} activeOpacity={0.8} style={styles.address__header}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<SafeImage source={{ uri: 'https://img.icons8.com/color/48/marker.png' }} style={[styles.contacts__icon, { marginRight: 8 }]}/>
					<Text style={styles.address__headerText}>Pickup Address</Text>
				</View>
				<SafeImage source={{ uri: showDetails ? 'https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png' : 'https://img.icons8.com/ios-glyphs/30/chevron-right.png' }} style={styles.address__arrow}/>
			</TouchableOpacity>

			{
				showDetails &&
				(
					<View style={styles.contacts__section}>
						<View style={styles.address__details}>
							<Text style={styles.address__detailText}>123 Main Street, New York, NY</Text>
							<Text style={styles.address__detailText}>+1 (234) 555-55-55</Text>
							<Text style={styles.address__detailText}>contact@deliveryapp.com</Text>
							<Text style={styles.address__detailText}>Mon-Fri: 09:00 - 20:00</Text>
						</View>
					</View>
				)
			}
		</View>
	);
}
export default AddressAccordion;