import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'
import cSSGlobal  from 'cSS/Global'
import { connect } from 'react-redux'

class BahanBacaan extends Component {

    render() {
    	let perikop = this.props.today
    	const Bacaan = perikop.bacaan.map((t, i) => {
			return (
				<View style={[cSSGlobal.flexDirectionRow, styles.bot10]} key={i}>
					<Text style={cSSGlobal.columnKey}>
						{t.kitab}
					</Text>
					<Text style={cSSGlobal.columnTitikDua}>
						{t.chapter}
					</Text>
					<Text style={cSSGlobal.description}>
						1 - 10
					</Text>
				</View>
			)
        })        
    	return (
        	<View style={[styles.containerBacaan]}>
        		{Bacaan}
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
		backgroundColor: 'red',
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 20
	},
	columnTitikDua: {
		width: 40
	}
})

export default connect( state => ({ nav: state.nav, today: state.perikopen.get('today') }) )(BahanBacaan)