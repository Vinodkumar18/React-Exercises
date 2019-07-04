import React from 'react';

export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "data" : "",
            "recivedData" : ""
        };
    }

    handleChange = (event) => {
        this.setState({
            "data" : event.target.value
        });
    }

    receiveDataFromChild = (event) => {
        this.setState({
            "recivedData" : event.data
        });
    }

    render()  {
        return (
            <div className="components">
                <div className="component-continer title">Component Communication using props</div>
                <div className="component-continer">
                    <div className="component-name control">Parent Component</div>
                    <div className="section-heading control">Data to child</div>
                    <input className="form-control input-control control" type="text" value={this.state.data} placeholder="Send this to Child" onChange={this.handleChange} />
                    <div className="section-heading control">Data from child</div>
                    <div className="section-heading control">{this.state.recivedData}</div>
                </div>
                <Child data={this.state.data} receivedData={this.receiveDataFromChild} />
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "data" : ""
        }
    }

    handleChange = (event) => {
        this.setState({
            "data" : event.target.value
        }, () => {
            this.props.receivedData({
                "data" : this.state.data
            });
        });
    }

    render() {
        return (
            <div className="component-continer">
                <div className="component-name control">Child Component</div>
                <div className="section-heading control">Data to parent</div>
                <input className="form-control input-control control" type="text" value={this.state.data} placeholder="Send this to parent" onChange={this.handleChange}/>
                <div className="section-heading control">Data from parent</div>
                <div className="section-heading control">{this.props.data}</div>
            </div>
        );
    }
}