import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'
import cSSGlobal  from 'cSS/Global'

class AyatHafalan extends Component {
	render() {
		const hafalan = this.props.today.hafalan
		console.log(hafalan)
		return (
			<View style={[cSSGlobal.flexDirectionColumn, styles.containerHafalan]}>
				<Text style={styles.hafalan}>
					{ hafalan.ayat_string }
				</Text>
				<Text style={styles.hafalan}>
					{ hafalan.ayat.kitab } { hafalan.ayat.chapter } : { hafalan.ayat.verse }
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerHafalan: {
		marginTop: 10
	},
	hafalan: {
		textAlign: 'center',
		fontStyle: 'italic'
	}
})

export default connect( state => ({ today: state.perikopen.get('today') }), {})(AyatHafalan)