import React from 'react';
import '../App.css';

class ModalPopup extends React.Component {
    render() {
        return (
            <form>
                <h3>ModalPopup task</h3>
                <div className='popup'>
                    <div className='popup_inner'>
                        <h4>Modal pop up with next and cancel buttons</h4>
                        <button onClick={this.props.nextTask}>Next</button>
                        <br/>
                        <br/>
                        <button onClick={this.props.closePopup}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ModalPopup;