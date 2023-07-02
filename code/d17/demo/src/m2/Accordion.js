import React from 'react';

class Accordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <h3 className='acc-title' onClick={this.handleClick}>
                    {this.props.title}
                </h3>
                {this.state.isOpen && <div className='acc-content'>{this.props.children}</div>}
            </>);
    }
}

export default Accordion;