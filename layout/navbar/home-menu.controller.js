(function () {
    'use strict';

    angular
        .module('blogApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = [];

    function NavbarController() {
        var vm = this;

        angular.element(window).scroll(function () {
            if (angular.element(window).scrollTop() >= 150) {
                angular.element('.scroll-navbar')
                    .addClass('isFixed')
            } else {
                angular.element('.scroll-navbar')
                    .removeClass('isFixed')
            }
        });

    }
})();
