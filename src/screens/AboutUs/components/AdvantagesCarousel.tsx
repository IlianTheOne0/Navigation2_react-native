const advantagesData = require("../assets/data/advantages.json");

import { useState } from "react";

import { View } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { NativeScrollEvent } from "react-native";
import { Dimensions } from "react-native";

import { SafeImage } from "../../../components/index";

import { styles } from "../../../utils/Css";

const { width } = Dimensions.get('window');

function AdvantagesCarousel()
{
	const [activeIndex, setActiveIndex] = useState(0);

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
	{
		const slideSize = event.nativeEvent.layoutMeasurement.width;
		const index = event.nativeEvent.contentOffset.x / slideSize;
		setActiveIndex(Math.round(index));
	};

	return (
		<>
			<View style={styles.layout__block}>
				<Text style={styles.block__sub_heading}>Our advantages</Text>
			</View>
			
			<View style={{ height: 200, width: '100%' }}>
				<FlatList data={advantagesData} keyExtractor={(item) => item.id} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll}
					renderItem=
					{
						({ item }) =>
						(
							<View style={[styles.carousel__slide, { width: width }]}> 
								<SafeImage source={item.image} style={styles.carousel__image}/>
								<View style={styles.carousel__content}>
									<Text style={styles.carousel__title}>{item.title}</Text>
									<Text style={styles.carousel__description}>{item.description}</Text>
								</View>
							</View>
						)
					}
				/>
			</View>

			<View style={styles.pagination__container}>
				{
					advantagesData.map
					(
						(_: any, index: number) =>
						(
							<SafeImage key={index} source={{ uri: 'https://img.icons8.com/material-outlined/48/full-moon.png' }} style={[styles.pagination__dot, { tintColor: index === activeIndex ? '#fff' : '#555' }]}/>
						)
					)
				}
			</View>
		</>
	);
}
export default AdvantagesCarousel;