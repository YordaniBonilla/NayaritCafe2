import React from 'react';


class AddToList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Tricks: "",
    	
		}
		this.handleAlert = this.handleAlert.bind(this);
		this.addTrick = this.addTrick.bind(this);
		this.traverseToUrl = this.traverseToUrl.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addTrick(event) {
      this.setState({Tricks: event.target.value})
	}
    
    handleChange(event) {
    this.setState({Tricks: event.target.value});
    //this.setState({Redirect: event.target.value});
    }   
    
    handleAlert(event) {
    alert('A url was added! Congratulations: ' + this.state.value);
    event.preventDefault();
    }

    traverseToUrl(event) {
    this.setState({Tricks: event.target.value})
    }

	render() {
		return (
        <div>
         New:
         <input 
         placeholder = 'Name of Trick to Add'
         onChange={this.handleChange} />

         <input 
          type='submit'
          onChange={this.handleChange}  
          value='Save'
          onClick={this.handleAlert} />

         <p>{ this.state.Tricks }</p>

        </div>
		);
	}
}

export default AddToList;