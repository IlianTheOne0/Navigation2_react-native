import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const styles: any = {}; 

class Css
{
	static create<T extends NamedStyles<T>>(argument: T): boolean
	{
		const createdStyles: ReturnType<typeof StyleSheet.create> = StyleSheet.create(argument);
		Object.assign(styles, createdStyles);
		return true;
	}
}

export { Css };