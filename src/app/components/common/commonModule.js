import angular from 'angular';
import ngMaterial from 'angular-material';

import HeaderComponent from './header/headerComponent';
import SidenavComponent from './sidenav/sidenavComponent';

export default angular.module('CommonModule', [ngMaterial])
                    .component('myHeader', HeaderComponent)
                    .component('mySidenav', SidenavComponent);
