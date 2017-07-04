// import angular from 'angular';

function appComponent(){
    return {
        template: 'app.html',
        controller: 'appController',
        contollerAs: 'vm'
    }
}

angular.module('AppModule').component('appComponent',appComponent);