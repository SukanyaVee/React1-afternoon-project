import React, {Component} from 'react';

class FilterObject extends Component
{
    constructor()
    {
        super();
        this.state = {
            unFilteredArray: [{color:"white", texture: "pearly"},{color: "pink", texture: "smooth"},{color: "green", texture: "rough"}], 
            userInput: "",
            filteredArray: []}
    }
    filterObj(input)
    {
        this.unfilteredArray.forEach(elem =>
        {
            if (elem.hasownProperty(input)) 
            {
                this.filteredArray.push(elem);
            }
        })
        this.setState.filteredArray=this.filteredArray;
    }
    render()
    {
    return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" value>{this.setState.unFilteredArray}</span>
                <input className="inputLine" onChange={event => {this.setState.userInput=event.target.value}}/>
                <button className="confirmationButton" onClick={event=>{this.filterObj(this.state.userInput)}}>Filter it! </button>
                <span className="resultsBox filterObjectRB">{this.state.filteredArray}</span>
            </div>
            )
        }
}

export default FilterObject;