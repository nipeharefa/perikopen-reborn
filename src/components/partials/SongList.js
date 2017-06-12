import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'
import { connect } from 'react-redux'
import cSSGlobal  from 'cSS/Global'
import HorizontalSongList from './_HorizontalSongList'

class SongList extends Component {

    render() {
    	let perikop = this.props.today
    	const KJ = perikop.songs.KJ.map((t, i) => {
			return (
				<Text style={styles.song} key={i}>{ t }</Text>
			)
        })
        const BZ = perikop.songs.BZ.map((t, i) => {
			return (
				<Text style={styles.song} key={i}>{ t }</Text>
			)
        })
        return (
        	<View style={[styles.container]}>
        		<HorizontalSongList listSongs={KJ} bookName="KJ" />
        		<HorizontalSongList listSongs={BZ} bookName="BZ" />
        	</View>
        )
    }

}


const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		flexDirection: 'column',
		marginTop: 30
	},
	songListHorizontal: {
		marginLeft: 20
	},
	song: {
		marginRight: 10,
		textAlign: 'center'
	}
})

export default connect( state => ({ nav: state.nav, today: state.perikopen.get('today') }) )(SongList)