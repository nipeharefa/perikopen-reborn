import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    AppRegistry,
    DatePickerAndroid,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from 'cSS/Perikopen'

import ActionButton from 'react-native-action-button'

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
        // newState[stateKey + 'Text'] = 'dismissed';
      } else {
        // var date = new Date(year, month, day);
        // newState[stateKey + 'Text'] = date.toLocaleDateString();
        // newState[stateKey + 'Date'] = date;
      }
      this.setState(newState)
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
    }
  }
	render() {
    
    const today = this.props.today
    const calendarDate = moment(today.timeStamp, 'x').toDate()

    const customTextButton = (
      <Icon name="calendar" size={25} color="white"></Icon>
    );

    const showPicker = this.showPicker.bind(this, 'calendar',
                        {date: calendarDate, mode: 'calendar'})

    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
        
        <View style={css.namaTanggal}>
          <TouchableOpacity
              onPress={showPicker}>
              <Text>{ today.dateString }</Text>
          </TouchableOpacity>

        </View>

        <InformasiMinggu />
        <BahanBacaan />
        <AyatHafalan />
        <SongList />
        </ScrollView> 
        <ActionButton 
          buttonColor="rgba(231,76,60,1)" 
          degrees={0}
          onPress={ showPicker } icon={customTextButton}>
          <Icon name="calendar" style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    )	
	}
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  bb: {
    borderRadius: 40,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  calendarButton: {
    position: 'absolute',
    bottom: 35,
    right: 15,
    borderColor: "#fafafa",
    borderWidth: 0.5
  }
})

export default connect( state => ({ nav: state.nav, perikopen: state.perikopen.get('items'),
today: state.perikopen.get('today') }), 
  { getPerikopenToday } )(Home2)
