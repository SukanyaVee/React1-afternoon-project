import React, {Component} from 'react';

class FilterString extends Component
{
    constructor()
    {
        super();
        this.state= {
            unfilteredArray: ["diamond", "pearl","sapphire","ruby", "zircon", "topaz"],
            userInput:"",
            filteredArray: []
        }
    }
    filterString(value)
    {
        this.unfilteredArray.forEach(elem=>{if(elem==value) {this.filteredArray.push(elem)}});
        this.setState.filteredArray=this.filteredArray;
    }
    render()
    {
    return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.state.unfilteredArray}</span>
                <input className="inputLine" onChange={event=>{this.setState.userInput=event.target.value}}/>
                <button  className="confirmationButton"onClick={event=>{this.filterString(this.state.userInput);}}>Filter it!</button>
                <span className="resultsBox filterStringRB">{this.state.filteredArray}</span>
            </div>
            )
        }
}

export default FilterString;