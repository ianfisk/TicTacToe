'use strict';

import React, { Component } from 'react';
import gridStyles from '../styles/gridStyles';
import { Col, Row, Grid } from 'react-native-easy-grid';

class TicTacToeMainGrid extends Component {
	render() {
		return (
			<Grid style={gridStyles.grid}>
					<Row style={gridStyles.row}>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
					</Row>
					<Row style={{ flex: 0 }}>
						<Col style={gridStyles.horizontalSeparatorLeft}></Col>
						<Col style={gridStyles.horizontalSeparatorCenter}></Col>
						<Col style={gridStyles.horizontalSeparatorRight}></Col>
					</Row>
					<Row style={gridStyles.row}>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
					</Row>
					<Row style={{ flex: 0 }}>
						<Col style={gridStyles.horizontalSeparatorLeft}></Col>
						<Col style={gridStyles.horizontalSeparatorCenter}></Col>
						<Col style={gridStyles.horizontalSeparatorRight}></Col>
					</Row>
					<Row style={gridStyles.row}>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col></Col>
					</Row>
				</Grid>
		);
	}
}

export default TicTacToeMainGrid;
