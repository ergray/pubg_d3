import React from 'react'
import { PlayerNameInput } from './playerNameInput'
import { RetrievePlayerButton } from './retrievePlayerButton'

class PlayerForm extends React.Component{
    constructor(){
        super()
        this.state = {
            playerName: ''
        }
    }

    setPlayerName = (name) => {
        const newState = Object.assign(this.state)
        newState.playerName = name
        this.setState(newState)
    }

    render(){
        return (<form>
                    <PlayerNameInput setPlayerName={this.setPlayerName} state={this.state}/>
                    <RetrievePlayerButton sendPlayer={this.props.sendPlayer} playerName={this.state.playerName}/>
                </form>)
    }
}

export { PlayerForm }