(function() {
'use strict';

    function Player() {
        var items= [
            'paper',
            'rock',
            'scissor'
        ];
        var combinations = {
            'paper_rock':true,
            'paper_scissor':false,
            'rock_paper':false,
            'rock_scissor':true,
            'scissor_paper':true,
            'scissor_rock':false
        };
        var playerScore = 0,serverScore = 0;
        return {
            get: function(index) {
                return index ? items[index] : items;
            },
            getPlayerScore:function(){
                return playerScore;
            },
            getServerScore:function(){
                return serverScore;
            },
            addScorePlayer:function(){
                return ++playerScore;
            },
            addScoreServer:function(){
                return ++serverScore;
            },
            isWinner:function(currentPlayer,currentServer){
                return combinations[currentPlayer + '_' + currentServer];
            },
            resetScore: function(){
                playerScore = 0;
                serverScore = 0;
            },
            shuffle: function(current) {
                var array = angular.copy(items);
                var indexToDelete = array.indexOf(current); 
                if (indexToDelete > -1) {
                    array.splice(indexToDelete, 1);
                }
                var counter = array.length, temp, index;
                // While there are elements in the array
                while (counter > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * counter);
                    // Decrease counter by 1
                    counter--;
                    // And swap the last element with it
                    temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }
                return array;
            }
        };
    }

angular.module('morra.services', [])
    .factory('Player', Player);
})();
