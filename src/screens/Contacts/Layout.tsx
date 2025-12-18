import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";

import ContactLinks from "./components/ContactLinks";
import SocialLinks from "./components/SocialLinks";
import AddressAccordion from "./components/AddressAccordion";

import { styles } from "../../utils/Css";
import "./utils/TriggerStyles";

function ContactsScreen()
{
	return (
		<ScrollView style={styles.layout__scrollView} contentContainerStyle={styles.scrollView_content} showsVerticalScrollIndicator={false}>
			<View style={styles.layout__block}>
				<Text style={styles.block__heading}>Contacts</Text>
			</View>

			<ContactLinks/>
			<SocialLinks/>
			<AddressAccordion/>
		</ScrollView>
	);
}

export default ContactsScreen;