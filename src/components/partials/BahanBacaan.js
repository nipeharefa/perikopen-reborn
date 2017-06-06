import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'

import cSSGlobal  from 'cSS/Global'

export default class SongList extends Component {

    render() {
        return (
        	<View style={[styles.containerBacaan]}>
        		<View style={[cSSGlobal.flexDirectionRow, styles.bot10]}>
					<Text style={cSSGlobal.columnKey}>
						Keluaran
					</Text>
					<Text style={cSSGlobal.columnTitikDua}>
						:
					</Text>
					<Text>
						1 - 10
					</Text>
				</View>
				<View style={[cSSGlobal.flexDirectionRow, styles.bot10]}>
					<Text style={cSSGlobal.columnKey}>
						Matius
					</Text>
					<Text style={cSSGlobal.columnTitikDua}>
						:
					</Text>
					<Text>
						1 - 10
					</Text>
				</View>
				<View style={[cSSGlobal.flexDirectionRow, styles.bot10]}>
					<Text style={cSSGlobal.columnKey}>
						Mazmur
					</Text>
					<Text style={cSSGlobal.columnTitikDua}>
						:
					</Text>
					<Text>
						20 - 30
					</Text>
				</View>
				<View style={[cSSGlobal.flexDirectionRow, styles.bot10]}>
					<Text style={cSSGlobal.columnKey}>
						Mazmur
					</Text>
					<Text style={cSSGlobal.columnTitikDua}>
						:
					</Text>
					<Text>
						20 : 22
					</Text>
				</View>
			</View>
        )
    }

}


const styles = StyleSheet.create({
	top10: {
		marginTop: 10
	},
	bot10: {
		marginBottom: 10
	},
	containerBacaan: {
		marginTop: 10,
		paddingLeft: 20,
		marginBottom: 20
	}
})