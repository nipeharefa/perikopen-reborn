import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class KidungJemaat extends Component {

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text style={styles.appstitle}>
          		Welcome KidungJemaat
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