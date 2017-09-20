import React from 'react'

class TextInput extends React.Component{

    render(){
        return <input onChange={this.props.onChange} 
                      name={this.props.name} 
                      placeholder={this.props.placeholder} 
                      type='text'
                      value={this.props.value}>
                </input>
    }
}

export { TextInput }