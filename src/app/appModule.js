import angular from 'angular';
import ngMaterial from 'angular-material';
import '../../node_modules/angular-material/angular-material.css';
import './style.css';

import CommonModule from './components/common/commonModule';


export default angular.module('AppModule', [ngMaterial, CommonModule.name]);



