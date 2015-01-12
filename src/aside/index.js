var React = require("react");

class Aside{
    render(){
        return (
        <aside>
            <div id="sidebar" className="nav-collapse">
                <ul className="sidebar-menu" id="nav-accordion">

                    <h5 className="centered">Budgetare</h5>

                    <li className="mt">
                        <a className="active" href="index.html">
                            <i className="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li className="sub-menu">
                        <a href="javascript:;" >
                            <i className="fa fa-desktop"></i>
                            <span>Item 1</span>
                        </a>
                        <ul className="sub">
                            <li><a href="general.html">Subitem1</a></li>
                            <li><a href="buttons.html">Subitem2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
        );
    }
}

module.exports = React.createClass(Aside.prototype);


