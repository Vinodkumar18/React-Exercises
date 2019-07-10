import React from "react";
import { Display } from "./display/display.component";
import { Keyboard } from "./keyboard/keyboard.component";
import "./calculator.component.css";

export class Calculator extends React.Component {
    state = {
        firstNumber : 0,
        secondNumber : 0,
        operation : "",
        result : 0,
        displayValue : 0      
    }

    render() {
        return (
            <div className="d-flex flex-column flex-wrap">
                <Display value={ this.state.displayValue }/>
                <Keyboard action={ this.action }/>
            </div>
        );
    }

    action = (property : string) => {
        this.setState({
            displayValue : property
        });
    }

    reset() {

    }
}