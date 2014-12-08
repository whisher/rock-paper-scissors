(function() {
  'use strict';

function player($templateCache, $state, Player) {
  return {
    restrict: 'E',
    replace:true,
    controllerAs: 'mrc',
    bindToController: true,
    scope: {},
    template: $templateCache.get('templates/morra/player.html'),
    controller:function(){
      var mrc = this;
      mrc.items = Player.get();
      mrc.isShowed = false;
      mrc.playerScore = Player.getPlayerScore();
      mrc.serverScore = Player.getServerScore();
      mrc.play = function(item){
        mrc.isShowed = true;
        var currentPlayer = item.item;
        var currentServer = Player.shuffle(currentPlayer)[0];
        mrc.currentPlayer = currentPlayer;
        mrc.currentServer = currentServer;
        if(Player.isWinner(currentPlayer,currentServer)){
          mrc.playerScore = Player.addScorePlayer();
        }
        else{
          mrc.serverScore = Player.addScoreServer();
        }
        if( (mrc.playerScore >= 10) || (mrc.serverScore >= 10)){
          $state.go('home');
        }
      };
    },
    link: function(scope, element, attrs) {
            
    }
  };
}

  angular.module('morra.directives', [])
    .directive('player', player);
})();

