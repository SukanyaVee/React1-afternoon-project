import React, {Component} from 'react';

class EvenAndOdd extends Component
{

        constructor()
        {
            super();
            this.state = {evenArray: [], oddArray: [], userInput: ''};
        }
        
    splitInput(userInput)
    {
        var inputArray=userInput.split("");
        inputArray.forEach(elem =>
        {
            elem%2 ? this.evenArray.push(elem) : this.oddArray.push(elem);
        });
        this.setState.evenArray;
        this.setState.oddArray;
    }
    render(){
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evend and Odds </h4>
            <input className="inputLine" onChange={event => {this.setState.userInput=event.target.value}}/>
            <button className="confirmationButton" onClick={event=>{this.splitInput(this.state.userInput);}}>Split it!</button>
            <span className="resultsBox" >{this.state.evenArray}</span>
            <span className="resultsBox">{this.state.oddArray}</span>
        </div>
            )
        }
}

export default EvenAndOdd;