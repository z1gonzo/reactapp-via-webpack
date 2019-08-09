// import React from "react";
import ReactDOM from "react-dom";
require('./main.css');

import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                Hello React !!
            </div>
        );
    }
}

// export default Index;


ReactDOM.render(<Index />, document.getElementById("index"));