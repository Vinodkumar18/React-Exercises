import React from "react";
import { Display } from "./display/display.component";
import { Keyboard } from "./keyboard/keyboard.component";
import "./calculator.component.css";

export class Calculator extends React.Component {
    state = {
        firstNumber : "0",
        secondNumber : "0",
        operation : "",
        result : "0",
        displayValue : "0",
        currentNumber : 1    
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
        this.doAction(property);
    }

    doAction = (property : string) => {
        switch(property) {
            case "+":
            case "-":
            case "x":
            case "÷":
                this.addOperation(property);
                break;
            case "AC":
                this.reset();
                break;
            case "+/-":
                this.changeSign();
                break;
            case "%":
                this.calculatePercentage();
                break;
            case "=":
                this.calculateResult();
                break;
            default: 
                this.appendNumber(property); 
        }
    }

    changeSign = () => {
        let currentNumber = Number(this.state.firstNumber);
        let currentKey = "firstNumber";
        if(this.state.currentNumber === 2){
            currentNumber = Number(this.state.secondNumber);
            currentKey = "secondNumber";
        }
        if( currentNumber !== 0){
            currentNumber *= -1; 
        }
        let currentState: any = {
            "displayValue" : currentNumber
        }
        currentState[currentKey] = currentNumber;
        this.setState(currentState);
    }

    calculatePercentage = () => {
        this.setResult(Number(this.state.firstNumber)/100);
    }

    calculateResult = () => {
        let firstNumber = Number(this.state.firstNumber);
        let secondNumber = Number(this.state.secondNumber);
        let operation = this.state.operation;
        let result : any = 0;
        switch(operation) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "x":
                result = firstNumber * secondNumber;
                break;
            case "÷":
                result = firstNumber / secondNumber;
                break;
        }
        this.setResult(result);
    }

    appendNumber = (property : string) => {
        let currentNumber = this.state.firstNumber;
        let currentKey = "firstNumber";
        if(this.state.currentNumber === 2){
            currentNumber = this.state.secondNumber;
            currentKey = "secondNumber";
        }
        if(currentNumber === "0" && property !== "."){
            currentNumber = property;
        } else {
            currentNumber += property;
        }
        let currentState: any = {
            "displayValue" : currentNumber
        }
        currentState[currentKey] = currentNumber;
        this.setState(currentState);
    }

    reset() {
        this.setState({
            firstNumber : "0",
            secondNumber : "0",
            operation : "",
            result : "0",
            displayValue : "0",
            currentNumber : 1    
        });
    }

    addOperation = (property : String) => {
        if(this.state.operation){
            this.calculateResult();
            return;
        }
        this.setState({
            "operation" : property,
            "currentNumber" : 2
        });
    }

    setResult = (result : number) => {
        this.setState({
            "firstNumber" : result,
            "secondNumber" : "0",
            "operation" : "",
            "currentNumber" : 1,
            "result" : result,
            "displayValue" : result
        });
    }
}