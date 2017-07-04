(function () {
    'use strict';

    angular
        .module('blogApp')
        .directive('homeMenu', homeMenu);

    function homeMenu() {
        var directive = {
            templateUrl: 'layout/navbar/home-menu.html',
            restrict: 'EA',
            scope: {
            },
            controller: 'NavbarController',
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }

})();