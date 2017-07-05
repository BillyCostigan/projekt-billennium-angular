import angular from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';

import '../../node_modules/angular-material/angular-material.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import './style.css';

import CommonModule from './components/common/commonModule';


export default angular.module('AppModule', [ngMaterial, uiRouter, CommonModule.name]).config(routingConfigs);



function routingConfigs($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('login', {
      url: "/login",
      component: 'LoginComponent'
    })
    .state('home', {
      url: "/home",
      templateUrl: "./components/home/home.html",
      controller:  'LoginController',
      controllerAs: 'vm'
    });
};