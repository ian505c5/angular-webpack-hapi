export default /*@ngInject*/ function($mdSidenav) {
    const vm = this;
    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
}
