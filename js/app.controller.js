(function() {
    'use strict';

    var olylisBlog = angular.module('olylisBlog', []);

    olylisBlog.controller('appController', appController);

    appController.$inject = [];

    function appController() {
        var vm = this;
        vm.test = 'Story';
    }


})();