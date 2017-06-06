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
        	<View style={[styles.songContiner]}>
        		<View style={[cSSGlobal.flexDirectionRow]}>
        			<Text>
						KJ
					</Text>
        		</View>
        		<View style={[cSSGlobal.flexDirectionRow, styles.songListHorizontal]}>
					<Text style={styles.song}>10</Text>
					<Text style={styles.song}>100</Text>
					<Text style={styles.song}>99</Text>
					<Text style={styles.song}>99</Text>
				</View>
			</View>
        )
    }

}


const styles = StyleSheet.create({
	songContiner: {
		flexDirection: 'row',
		marginTop: 50,
		marginLeft: 10
	},
	songListHorizontal: {
		marginLeft: 20
	},
	song: {
		marginRight: 10
	}
})