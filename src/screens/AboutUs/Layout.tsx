import { ScrollView } from "react-native";

import CompanyInfo from "./components/CompanyInfo";
import AdvantagesCarousel from "./components/AdvantagesCarousel";

import { styles } from "../../utils/Css";
import "./utils/TriggerStyles";

function AboutUsScreen() {
	return (
		<ScrollView style={styles.layout__scrollView} contentContainerStyle={styles.scrollView_content} showsVerticalScrollIndicator={false}>
			<CompanyInfo/>
			<AdvantagesCarousel/>
		</ScrollView>
	);
}

export default AboutUsScreen;