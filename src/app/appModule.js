import angular from 'angular';
import ngMaterial from 'angular-material';
import appComponent from './appComponent';


export default angular.module('AppModule', ['ngMaterial'])
    .component('appComponent', appComponent);



