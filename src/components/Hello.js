import React from 'react';

class Hello extends React.Component {
    render() {
        return (
        <h1>Hello {this.props.message}</h1>
        )
    }
}

export default Hello
