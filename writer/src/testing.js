import React, { Component } from 'react';

export class UnControll extends Component {
    constructor (props) {
    super(props);
    this.inputRef = React.createRef();
    }
    handleSubmit = (e) => {
    console.log(' input ', this.inputRef.current.value);
    console.log('event ', this);
    e.preventDefault();
    }
    render () {
    return (
    <form onSubmit={e => this.handleSubmit(e)}>
        <input defaultValue="lindaidai" ref={this.inputRef} />
        <input type="submit" value=" " />
    </form>
    )
    }
}


// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }

// const element = () =>{
//     return(
//         <Welcome name="Sara"/>
//     )
// }
export default UnControll