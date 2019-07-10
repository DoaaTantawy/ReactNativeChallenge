/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';

import {createAppContainer, createStackNavigator} from "react-navigation";
import HomePage from './screens/HomePage';
import AddItem from './screens/AddItem';

const appStackNavigator =createStackNavigator({
     'HomePage': HomePage,
     'AddItem': AddItem,
    }
);

export default createAppContainer(appStackNavigator);
