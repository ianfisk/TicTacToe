'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import cellStyles from '../styles/cellStyles';

class Cell extends Component {
	static propTypes = {
		letter: PropTypes.string.isRequired
	}
	render() {
		return (
			<TouchableHighlight style={cellStyles.cell}>
				<Text style={cellStyles.cellText}>
					{this.props.letter.toUpperCase()}
				</Text>
			</TouchableHighlight>
		);
	}
}

export default Cell;
