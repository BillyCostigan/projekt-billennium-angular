import angular from 'angular';
import angularMaterial from 'angular-material';
import appComponent from './appComponent';


export default angular.module('AppModule', [angularMaterial])
    .component('appComponent', appComponent);



