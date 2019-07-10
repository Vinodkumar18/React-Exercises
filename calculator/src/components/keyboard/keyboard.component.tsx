import React from "react";
import "./keyboard.component.css";

interface Inputs {
    action : Function;
}

export class Keyboard extends React.Component<Inputs> {
    render() {
        return (
            <div className="d-flex flex-row">
                <div className="d-flex flex-column col-10 p-0">
                    <div className="d-flex flex-row">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("AC") }>AC</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("+/-") }>+/-</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("%") } >%</button>
                            </div>
                            <div className="row">
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("7") } >7</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("8") } >8</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("9") } >9</button>
                            </div>
                            <div className="row">
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("4") } >4</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("5") } >5</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("6") } >6</button>
                            </div>
                            <div className="row">
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("1") } >1</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("2") } >2</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("3") } >3</button>
                            </div>
                            <div className="row">
                                <button className="col-8 p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("0") } >0</button>
                                <button className="col-4 p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked(".") } >.</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column col-2 p-0">
                    <div className="d-flex flex-row">
                        <div className="container-fluid p-0 keyboard-operations">
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("÷") } >÷</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("X") } >X</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("-") } >-</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("+") } >+</button>
                                <button className="col p-4 keyboard-button" onClick={() => this.onKeyboardButtonClicked("=") } >=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onKeyboardButtonClicked = (property : String) => {
        console.log("Button clicked - " + property);
        if(!isNaN(Number(property))){
            this.props.action(property);
        };
    }
}