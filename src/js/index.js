import React from 'react';
import ReactDom from 'react-dom';

class Test extends React.Component {
    render() {
        return (
            <h1>Hello, World!</h1>
        );
    }
}

React.Dom(
    <Test />,
    document.getElementById('container')
);