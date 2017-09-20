import React from 'react'
import { TextInput } from '../Components/textInput.js'

class PlayerNameInput extends React.Component{
    constructor(){
        super()
        this.state = {
            playerName: ""
        }
    }


    handleChange(e){
        console.log('changin')
        const newState = Object.assign(this.state)
        newState.playerName = e.target.value
        this.setState(newState)
        this.props.setPlayerName(this.state.playerName)
    }

    componentWillMount(){
        this.setState(this.props.state)
    }

    render(){
        return <TextInput state={this.props.state} 
                          value={this.state.playerName} 
                          onChange={(e) => this.handleChange(e)} 
                          name='player' 
                          placeholder='Player Name'/>
    }
}

export { PlayerNameInput }