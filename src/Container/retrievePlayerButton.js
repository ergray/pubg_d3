import { ButtonComponent } from '../Components/buttonComponent.js'
import React from 'react'

class RetrievePlayerButton extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    requestListener(response){
        console.log(response)
    }

    reportError(){
        console.log(this.responseText)
    }

    componentWillMount(){
        this.setState({
            playerName: this.props.playerName
        })
    }

    componentWillReceiveProps(props){
        console.log(props)
        this.setState(props)
        
    }

    handleClick(e){
        e.preventDefault()
        const xhr = new XMLHttpRequest()
        xhr.onload = () => {
            console.log(this.props)
            if (xhr.readyState === xhr.DONE){
                if (xhr.status === 200){
                    const playerStats = JSON.parse(xhr.response)
                    this.props.sendPlayer(playerStats)
                }
            }
        }
        xhr.open("GET", "https://pubgtracker.com/api/profile/pc/"+this.state.playerName)
        xhr.setRequestHeader('TRN-Api-Key', '3128a6f9-739c-406c-ac8f-25475b9d6b5c')
        xhr.send()
        
    }

    render(){
        return <ButtonComponent playerName={this.props.playerName} onClick={(e) => this.handleClick(e)} name='player' description='Retrieve Player'/>
    }
}

export { RetrievePlayerButton }
