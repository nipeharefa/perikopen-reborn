import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
    View
} from 'react-native'
import cSSGlobal  from 'cSS/Global'

export default class HorizontalSongList extends Component {
  render() {
    return (
      <View style={[cSSGlobal.flexDirectionRow, styles.containerList]}>
        <Text style={[styles.keySongs]}>
          {this.props.bookName || 'KJ' }
        </Text>
        { this.props.listSongs }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  keySongs: {
    backgroundColor: 'blue',
    marginRight: 10
  },
  songListHorizontal: {
    backgroundColor: 'yellow'
  },
  containerList: {
    backgroundColor: 'cyan',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  }
})