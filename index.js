import React from 'react';
import { View } from 'react-native';
import jdenticon from 'jdenticon';
import { SvgXml } from 'react-native-svg';

const Jdenticon = props => {
	const svg = jdenticon.toSvg(props.value, props.size, props.config);
	const style = props.style.padding
		? {
				width: props.size + 2 * props.style.padding
		  }
		: {
				width: props.size
		  };

	return (
		<View style={[style, props.style]}>
			<SvgXml xml={svg} />
		</View>
	);
};

export default Jdenticon;
