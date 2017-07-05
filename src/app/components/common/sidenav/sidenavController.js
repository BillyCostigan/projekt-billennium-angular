import MenuService from './menuService';

export default class SidenavController{
    constructor(MenuService){
        this.menu = [];
        MenuService.getMenuItems()
            .then(result => this.menu = result.data);
    }
    check(){
        this.menu = [];
    }
}


