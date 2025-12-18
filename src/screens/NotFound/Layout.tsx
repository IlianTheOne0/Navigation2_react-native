import { ScrollView } from "react-native";
import { Text } from "react-native";

import { styles } from "../../utils/Css";
import "./utils/TriggerStyles";

function Layout()
{
	return (
		<ScrollView style={styles.layout__scrollView} contentContainerStyle={styles.scrollView_content} showsVerticalScrollIndicator={false}>
			<Text style={styles.notFound__title}>404 - Page Not Found</Text>
			<Text style={styles.notFound__message}>The page you are looking for does not exist.</Text>
		</ScrollView>	
	);
}

export default Layout;