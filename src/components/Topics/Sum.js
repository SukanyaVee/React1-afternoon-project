import React, {Component} from 'react';

class Sum extends Component
{
    constructor()
    {
        this.state = {number1: 0, number2: 0, sum: null}
    }
    sumSum(num1,num2)
    {
        this.setState.sum = num1+num2;
    }
    render()
    {
    return (
            <div  className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={event=>{this.state.number1=event.target.value}}/>
                <input className="inputLine" onChange={event=>{this.state.number2=event.target.value}}/>
                <button className="confirmationButton" onClick={event=>{this.sumSum(this.state.number1,this.state.number2)}}>Sum up!</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
            )
        }
}

export default Sum;