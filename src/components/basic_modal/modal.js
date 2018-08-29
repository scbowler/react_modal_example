import React, { Component } from 'react';
import './modal.css';

class ButtonModal extends Component {
    state = {
        isOpen: true
    };

    open = () => this.setState({isOpen: true});

    close = () => this.setState({isOpen: false});

    render(){

        if(this.state.isOpen){
            return (
                <div className="basic-modal">
                    <div className="basic-modal-content">
                        <div className="basic-modal-close">X</div>
                        <h1>Basic Modal Example</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat laboriosam quo? Ab officia tempore ratione id, modi possimus adipisci autem, inventore reiciendis facere nesciunt.</p>
                    </div>
                </div>
            )
        }

        return (
            <button onClick={this.open} className="btn btn-outline-primary">Open Button Modal</button>
        );
    }
}

export default ButtonModal;
