import { StackNavigator, TabNavigator } from "react-navigation";

import HomePerikopen from './components/Home2'
import Detail from './components/Detail'

import Home from './components/Home'
import About from './components/About'
import KJ from './components/KidungJemaat'

const StacksInTabs = StackNavigator({
  Home: { 
  	screen: HomePerikopen,
  	navigationOptions: () => ({
  		header: null
  	})
  }
})

const BasicApp = TabNavigator({
  MainTab: {
    screen: StacksInTabs,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Perikopen',
    }
  },
  About: {
    screen: About,
    path: '/about',
    navigationOptions: {
      tabBarLabel: 'Help',
    }
  }
},{
  tabBarPosition: 'bottom'
});

export default BasicApp