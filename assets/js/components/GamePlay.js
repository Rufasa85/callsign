var React = require('react');
var GameCard = require('./GameCard');
var TurnAlert = require('./TurnAlert');
var randomWords= require('../../../data/random-words');
var _ = require('lodash');

var GamePlay = React.createClass({
    getInitialState: function() {
        return {
            currentTurn: true,
            turnColor: 'Red',
            cards: _.sample(randomWords, 25)
        }
    },

    handleClick: function() {
        var color = this.state.currentTurn == true ? 'Blue' : 'Red';
        this.setState({
            currentTurn: !this.state.currentTurn,
            turnColor: color
        });
    },

    render: function(){
        var self = this;
        var gameCards = self.state.cards.map(function(item, idx) {
            return (
                <GameCard key={'card-' + idx} handleClick={self.handleClick} item={item} />
            )
        })

        return (
            <div className="row">
                <TurnAlert color={this.state.turnColor} />
                {gameCards}
            </div>
        )
    }
})

module.exports = GamePlay;
