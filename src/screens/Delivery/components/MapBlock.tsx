const regionData = require("../assets/data/region.json");

import { View } from "react-native";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { styles } from "../../../utils/Css";

function MapBlock()
{
	const initialRegion =
	{
		latitude: Number(regionData.latitude),
		longitude: Number(regionData.longitude),
		latitudeDelta: Number(regionData.latitudeDelta),
		longitudeDelta: Number(regionData.longitudeDelta),
	};

	return (
		<View style={styles.layout__block}>
			<MapView style={styles.delivery__map} initialRegion={initialRegion}>
				<Marker coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }} title="Delivery location"/>
			</MapView>
		</View>
	);
}

export default MapBlock;