import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './ChoiceBoxStyle';
import { Metrics } from 'qualificame-kiosk/app/styles';
import PrimaryBtn from 'qualificame-kiosk/app/components/PrimaryBtn';

export default class ChoiceBox extends PureComponent {
	render() {
		return (
			<View style={[styles.fullWidth, styles.alignItemsCenter]}>
				<View style={styles.choiceBox}>
					{this.props.choices.map(item => (
						<View key={item.id} style={[styles.baseVerticalMargin, styles.baseMarginRight, styles.choiceItem]}>
							<PrimaryBtn
								text={item.description}
								onPress={() => this.props.onSelectChoice(item.id) }
								btnStyle={styles.baseVerticalPadding}
							/>
						</View>
					))}
				</View>
			</View>
		);
	}
}

ChoiceBox.propTypes = {
	choices: PropTypes.array,
}

ChoiceBox.defaultProps = {
	choices: [{
		id: '0',
		description: 'Choice 1',
	}]
}
