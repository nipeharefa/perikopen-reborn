import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'

import cSSGlobal from 'cSS/Global'
import moment from 'moment'

import { List } from 'immutable'

class InformasiMinggu extends Component {
	render() {

		const result = this.props.today
		return (
			<View style={styles.containerInfo}>
				<View style={[cSSGlobal.flexDirectionRow]}>
					<Text style={styles.columnKey}>
						Nama Minggu
					</Text>
					<Text style={styles.columnTitikDua}>
						:
					</Text>
					<Text>
						{ result.info.name }
					</Text>
				</View>
				<View style={[cSSGlobal.flexDirectionRow, styles.top10]}>
					<Text style={styles.columnKey}>
						Warna
					</Text>
					<Text style={styles.columnTitikDua}>
						:
					</Text>
					<Text>
						{ result.info.color }
					</Text>
				</View>
				<View style={[cSSGlobal.flexDirectionRow, styles.top10]}>
					<Text style={styles.columnKey}>
						Tata Ibadah
					</Text>
					<Text style={styles.columnTitikDua}>
						:
					</Text>
					<Text>
						{ result.info.tata_ibadah }
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	columnKey: {
		width: 150
	},
	columnTitikDua: {
		width: 20
	},
	containerBox: {
		flexDirection: 'row'
	},
	top10: {
		marginTop: 10
	},
	top20: {
		marginTop: 20
	},
	containerInfo: {
		marginTop: 20,
		marginLeft: 10,
		marginBottom: 20
	}
})

export default connect( state => ({ nav: state.nav, today: state.perikopen.get('today') }) )(InformasiMinggu)
