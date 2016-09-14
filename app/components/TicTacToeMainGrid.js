'use strict';

import React, { Component } from 'react';
import gridStyles from '../styles/gridStyles';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Cell from './Cell';

class TicTacToeMainGrid extends Component {
	render() {
		return (
			<Grid style={gridStyles.grid}>
					<Row style={gridStyles.row}>
						<Col>
							<Cell letter='o' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='X' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='X' />
						</Col>
					</Row>
					<Row style={{ flex: 0 }}>
						<Col style={gridStyles.horizontalSeparatorLeft}></Col>
						<Col style={gridStyles.horizontalSeparatorCenter}></Col>
						<Col style={gridStyles.horizontalSeparatorRight}></Col>
					</Row>
					<Row style={gridStyles.row}>
						<Col>
							<Cell letter='X' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='X' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='o' />
						</Col>
					</Row>
					<Row style={{ flex: 0 }}>
						<Col style={gridStyles.horizontalSeparatorLeft}></Col>
						<Col style={gridStyles.horizontalSeparatorCenter}></Col>
						<Col style={gridStyles.horizontalSeparatorRight}></Col>
					</Row>
					<Row style={gridStyles.row}>
						<Col>
							<Cell letter='X' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='o' />
						</Col>
						<Col style={gridStyles.verticalSeparator}></Col>
						<Col>
							<Cell letter='' />
						</Col>
					</Row>
				</Grid>
		);
	}
}

export default TicTacToeMainGrid;
