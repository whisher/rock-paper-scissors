(function() {
'use strict';

function HomeController($state) {
    var home = this;
    home.play= function(){
    	$state.go('morra');
    };
}

angular.module('home.controllers', [])
    .controller('HomeController', HomeController);
})();
