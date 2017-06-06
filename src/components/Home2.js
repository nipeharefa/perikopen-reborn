import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    AppRegistry,
    DatePickerAndroid,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from 'cSS/Perikopen'

import SongList from './partials/SongList'
import AyatHafalan from './partials/AyatHafalan'
import InformasiMinggu from './partials/InformasiMinggu'
import BahanBacaan from './partials/BahanBacaan'

import moment from 'moment'
import { perikopen } from '../db/perikopen'
import { List } from 'immutable'
import { getPerikopenToday } from '../actions/perikopen'

class Home2 extends Component {
  static title = 'DatePickerAndroid';
  static description = 'Standard Android date picker dialog';

  state = {
    presetDate: new Date(2020, 4, 5),
    simpleDate: new Date(2020, 4, 5),
    spinnerDate: new Date(2020, 4, 5),
    calendarDate: new Date(2020, 4, 5),
    defaultDate: new Date(2020, 4, 5),
    allDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    spinnerText: 'pick a date',
    calendarText: 'pick a date',
    defaultText: 'pick a date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'pick a date, preset to 2020/5/5',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',

  }
  showPicker = async (stateKey, options) => {
    try {
      var newState = {}
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState)
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
    }
  }
	render() {
    const today = this.props.today
    return (
      <View style={styles.container}>
        
        <View style={css.namaTanggal}>
          
          <Icon name={'chevron-left'} size={15} style={[{
            marginRight: 10 }]} />
          <TouchableOpacity
              onPress={this.showPicker.bind(this, 'calendar',
                  {date: this.state.calendarDate, mode: 'calendar'})}>
              <Text>{ today.dateString }</Text>
          </TouchableOpacity>

          <Icon name={'chevron-right'} size={15} style={[{
            marginLeft: 10,
          }]} />

        </View>

        <InformasiMinggu />
        <BahanBacaan />
        <AyatHafalan />
        <SongList />

      </View> 
    )	
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default connect( state => ({ nav: state.nav, perikopen: state.perikopen.get('items'),
today: state.perikopen.get('today') }), 
  { getPerikopenToday } )(Home2)
