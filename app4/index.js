import React, {Component} from 'react';
import {
	Text,
	View,
	AppRegistry
	} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class app4 extends Component {
  render() {
    return (
    	<View>
    		<ListaItens/>
    	</View>
    );
  }
}




AppRegistry.registerComponent('app4', () => app4);
