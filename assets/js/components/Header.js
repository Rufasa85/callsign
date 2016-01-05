var React = require('react');
var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" onClick={this.props.splash} href='#'>CallSign</a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.props.about} href='#'>About</a></li>
                            <li><a onClick={this.props.newGame} href='#'>New Game</a></li>
                            <li><a onClick={this.props.myGames} href='#'>My Games</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a onClick={this.props.signUp} href="#">Signup</a></li>
                            <li><a onClick={this.props.login} href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
})

module.exports = Header;
