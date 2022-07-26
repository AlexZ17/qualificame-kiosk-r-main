import React, { PureComponent } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './LogoutBtnStyle';
import { Feather } from '@expo/vector-icons';

export default class LogoutBtn extends PureComponent {
	render() {
		return (
			<TouchableOpacity
				{...this.props}
			>
				<Feather 
					name={this.props.iconName} 
					size={Platform.OS === 'ios' ? 35:30} style={styles.black}
				/>
			</TouchableOpacity>
		);
	}
}

LogoutBtn.propTypes = {
	iconName: PropTypes.string
}

LogoutBtn.defaultProps = {
	iconName: 'log-out'
}
