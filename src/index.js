import React, {Component} from 'react'
import { Provider, connect } from 'react-redux'
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
import { initPerikopen, setPerikopenToday } from './actions/perikopen'
import { perikopen } from './db/perikopen'

import Navigator from './router'
import getStore from './store'
import moment from 'moment'

import { List } from 'immutable'

const navReducer = (state, action) => {
    const newState = Navigator.router.getStateForAction(action, state)
    return newState || state
}

class App extends Component {
    componentWillMount() {
        this.props.initPerikopen(perikopen)
        this.setTodayPerikopen()
    }
    setTodayPerikopen() {
      const listArr = List(perikopen)
      const today = moment().format('YYYY-MM-YY');
      const now = moment(today).format('x');
      const filtered = listArr.filter( x => {
        return x.timeStamp >= now
      })
      const result = filtered.first() || {}
      this.props.setPerikopenToday(result)
    }
    render(){
        return (
            <Navigator 
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        )
    }
}

const store = getStore(navReducer)
const AppIndex = connect( state => ({ nav: state.nav }) , 
    { dispatch: store.dispatch, initPerikopen, setPerikopenToday } )(App)

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}