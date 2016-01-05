var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var About = require('./About');
var Splash = require('./Splash');
var NewGame = require('./NewGame');
var Login = require('./Login');
var SignUp = require('./SignUp');
var MyGames = require('./MyGames');
var GamePlay = require('./GamePlay');

var MyApp = React.createClass({
    getInitialState:function() {
        return {content:<Splash/>}
    },
    //setting click listeners for navbar
    splashClick:function() {
        this.setState({content:<Splash/>})
    },
    aboutClick:function() {
        this.setState({content:<About/>})
    },
    myGamesClick:function() {
        this.setState({content:<MyGames userGame={this.userGameClick}/>})
    },
    newGameClick:function() {
        this.setState({content:<NewGame/>})
    },
    loginClick:function() {
        this.setState({content:<Login/>})
    },
    signUpClick:function() {
        this.setState({content:<SignUp/>})
    },
    userGameClick:function() {
        this.setState({content:<GamePlay/>})
    },
    render: function() {
        return (
            <div>
                <Header about={this.aboutClick} splash={this.splashClick} myGames={this.myGamesClick} newGame={this.newGameClick} login={this.loginClick} signUp={this.signUpClick} userGame={this.userGameClick}/>
                <div className='container'>
                    {this.state.content}
                    <Footer/>
                </div>
            </div>
        )
    }
})

module.exports = MyApp;
