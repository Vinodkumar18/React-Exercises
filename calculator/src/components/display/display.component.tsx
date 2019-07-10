import React from "react";

interface Inputs {
    "value" : number
}

export class Display extends React.Component<Inputs> {
    render(){
        return (
            <div className="display-4 comp-display p-2">
                {this.props.value}
            </div>
        );
    };
}