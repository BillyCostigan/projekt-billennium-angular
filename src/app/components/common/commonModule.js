import angular from 'angular';
import ngMaterial from 'angular-material';

import LoginComponent from './login/loginComponent';

import HeaderComponent from './header/headerComponent';
import SidenavComponent from './sidenav/sidenavComponent';

import MenuService from './sidenav/menuService';

export default angular.module('CommonModule', [ngMaterial])
                    .service('MenuService', MenuService)
                    .component('LoginComponent', LoginComponent)
                    .component('myHeader', HeaderComponent)
                    .component('mySidenav', SidenavComponent);
