import { useState } from "react";

import { Image } from "react-native";
import { ImageProps } from "react-native";
import { StyleSheet } from "react-native";

import DefaultIcon from "../assets/images/default-icon.svg";

function SafeImage(props: ImageProps)
{
    const [hasError, setHasError] = useState(false);

    const flattenedStyle: any = StyleSheet.flatten(props.style);
    const width = flattenedStyle?.width || 30;
    const height = flattenedStyle?.height || 30;

    if (hasError) { return <DefaultIcon style={props.style} width={width} height={height}/>; }

    return (<Image {...props} onError={() => setHasError(true)}/>);
}

export default SafeImage;