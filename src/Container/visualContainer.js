import React from 'react'
import { PlayerForm } from './retrievePlayerForm'
import { ButtonComponent } from '../Components/buttonComponent'

class VisualPlayer extends React.Component{
    constructor(){
        super()
        this.state = {
            player1: {}
        }
    }

    sendPlayer(player){
        this.setState({player1: player})
    }

    handleClick(e){
        e.preventDefault()
        console.log('clicked')
        console.log(this.state.player1.stats)
        for (var stat in this.state.player1.stats){
            console.log(stat)
        }
    }
    render(){
        return (<div>
                    <PlayerForm sendPlayer={(e) => this.sendPlayer(e)}/>
                    <ButtonComponent onClick={(e) => this.handleClick(e)} description="Show Regions"/>
                </div>)
    }
}

export { VisualPlayer }