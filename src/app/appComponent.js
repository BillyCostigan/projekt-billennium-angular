function appController(){
    console.log('Elo!');
}

module.exports = {
    template: require('./app.html'),
    controller: 'appController',
    contollerAs: 'vm'
}
