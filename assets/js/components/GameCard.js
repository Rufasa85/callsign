var React = require('react');

var GameCard = React.createClass({
    render: function() {
        return (
            <div className='col-sm-5ths col-xs-4'>
                <button className='card btn-primary' onClick={this.props.handleClick}>
                        <h4>{this.props.item}</h4>
                </button>
            </div>
        )
    }
});

module.exports = GameCard;
