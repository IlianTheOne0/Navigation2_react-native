const regionData = require("../assets/data/region.json");

import { View } from "react-native";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { styles } from "../../../utils/Css";

function MapBlock()
{
	return (
		<View style={styles.layout__block}>
			<MapView style={styles.delivery__map} initialRegion={regionData}>
				<Marker coordinate={{ latitude: regionData.latitude, longitude: regionData.longitude }} title="Delivery location"/>
			</MapView>
		</View>
	);
}

export default MapBlock;