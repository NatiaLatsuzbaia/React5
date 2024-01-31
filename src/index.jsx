import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

class Natia extends React.Component{
    constructor (){
        super();
        
        this.state =  {
            name: " ",
        };
    }

    setValue(){
        this.setState({
          name: "demna",
        });
        window.alert(this.state.name);
        
    }
    render() {
        
        return (
            <React.Fragment>
                {
                <button type="button" class="btn btn-warning" onClick={() => this.setValue()}>დააჭირე</button>
                }

            </React.Fragment>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Natia />);
