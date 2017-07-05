export default class HeaderController{
    constructor($mdSidenav){
        this.title = 'header';
        this.$mdSidenav = $mdSidenav;
        this.isLoggedIn = false;
        this.test();
    }

    $onInit(){
        console.log('y');
    }

    toggleMenu(){
        this.$mdSidenav('left').toggle();
    }
    toggleLogin(){
        this.isLoggedIn = !this.isLoggedIn;
    }
    test(){
        console.log('x');
    }
    
}

HeaderController.$inject = ['$mdSidenav']; 