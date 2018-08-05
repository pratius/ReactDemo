/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import UserLogin from './app/component/UserLogin';
import Home from './app/component/Home';

export default createStackNavigator
({
  
 userLogin:UserLogin,  
 home:Home
})

