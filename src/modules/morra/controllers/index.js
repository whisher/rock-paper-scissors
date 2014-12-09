(function() {
'use strict';

function MorraController() {
    var mrr = this;
    mrr.welcome = 'Welcome!';
}
function MorraResultController($stateParams, $state){
	var mrs = this;
	mrs.result = $stateParams.id;
	mrs.play= function(){
    		$state.go('morra');
    	};
}
angular.module('morra.controllers', [])
    .controller('MorraController', MorraController)
    .controller('MorraResultController', MorraResultController);
})();
