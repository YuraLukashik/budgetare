var React = require("react");

class Footer{
    render(){
        return (
            <footer className="site-footer">
                <div className="text-center">
                    2014 by Cantare
                    <a href="index.html#" className="go-top">
                        <i className="fa fa-angle-up"></i>
                    </a>
                </div>
            </footer>
        );
    }
};

module.exports = React.createClass(Footer.prototype);
