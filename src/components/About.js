import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { connect } from 'react-redux'

class About extends Component {

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text style={styles.appstitle}>
          		Welcome About
        		</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	appstitle: {
		textAlign: 'center',
		marginTop: 40
	}
});

export default connect( state => ({ count: state.count }) )(About)