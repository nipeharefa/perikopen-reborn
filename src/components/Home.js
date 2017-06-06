import { StackNavigator } from "react-navigation";

import Home from './Home2'
import Detail from './Detail'

const StacksInTabs = StackNavigator({
  Home: { 
  	screen: Home,
  	navigationOptions: () => ({
  		header: null
  	})
  },
  Profile: {
  	screen: Detail,
  	navigationOptions () {
  		headerMode: 'null'
  	}
  }
});

export default StacksInTabs;