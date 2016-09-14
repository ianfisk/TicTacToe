'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import cellStyles from '../styles/cellStyles';

class Cell extends Component {
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

Cell.propTypes = {
	letter: PropTypes.oneOf(['', 'X', 'x', 'O', 'o']).isRequired
};

Cell.defaultProps = {
	letter: ''
};

export default Cell;
