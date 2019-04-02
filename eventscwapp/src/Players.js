import React, { Component } from 'react';

class Players extends Component{
    constructor(props){
        super(props);
        this.state= {
            countScore1: 0,


        }
    }
    //function makes clicker go up by 1
    buttonScoreClickMe= (e) =>{
        this.setState(
            {
                countScore1: this.state.countScore1+1,
            }
        )
    };


    //function to allow player to choose increment to play by 5 (adds 5 to score)
    navClickMe5= (e) =>{
        this.setState(
            {
                countScore1: this.state.countScore1+5,
            }
        )
    };
    //function to allow player to choose increment to play by 10 (adds 10 to score)
    navClickMe10= (e) =>{
        this.setState(
            {
                countScore1: this.state.countScore1+10,
            }
        )
    };

    keyboardClick= (e)=>{
        console.log(e);
        if(e.code === "KeyQ") {
            this.setState(
                {
                    countScore1: this.state.countScore1 + 1,
                }
            )
        }

    };
    //adds event listener to allow score to be counted as button is clicked
    render(){
        document.addEventListener("keydown", this.keyboardClick);
        return(
            <div>
                <h1>Player {this.props.whichPlayer}</h1>
                <h1>Score: {this.state.countScore1}</h1>
                <button onClick={this.buttonScoreClickMe}>1pt</button>
                <button onClick={this.navClickMe5}>5pts</button>
                <button onClick={this.navClickMe10}>10pts</button>

            </div>



        );
    }
}

export default Players;