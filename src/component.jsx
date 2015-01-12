var React = require("react");
var Aside = require("./aside");
var Main = require("./main");
var Footer = require("./footer");

class App{
    render(){
        return (
            <section id="container">
                <Aside />
                <Main />
                <Footer />
            </section>
        );
    }
 };

 module.exports = React.createClass(App.prototype);
