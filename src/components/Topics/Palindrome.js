import React, {Component} from 'react';

class Palindrome extends Component
{
    constructor()
    {
        this.state = {userInput:"",palindrome: ""}
        }
    }
    pCheck(value)
    {
        var input=value.split("");
        var reverse=[];
        input.array.forEach(element => {
            reverse.unshift(elem);
        });
        input===reverse ? palindrome="true" : palindrome = "false";
    }
    render()
    {
        return (
            <div>
                <h4>Palindrome Check</h4>
                <input className="inputLine" onChange={event=>{this.setState.userInput=event.target.value}/>
                <button className="confirmationButton" onClick={event=>{this.pCheck(this.state.userInput)}}>Check!</button>
                <span  className="resultsBox">{this.state.palindrome}</span>
            </div>
            );
    }
}

export default Palindrome;