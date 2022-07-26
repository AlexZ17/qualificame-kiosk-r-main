import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './CloseBtnStyle';
import { Feather } from '@expo/vector-icons';
import { Colors } from 'qualificame-kiosk/app/styles';

export default class CloseBtn extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				activeOpacity={0.6}
			>
				<Feather  name='x' size={25} color={Colors.white}/>
			</TouchableOpacity>
		);
	}
}


CloseBtn.propTypes = {
	onPress: PropTypes.func,
}

CloseBtn.defaultProps = {
	onPress: ()=>{},
}


