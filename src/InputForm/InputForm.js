import React from 'react';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputID: "",
            inputFirstName: "", 
            inputLastName: "",
            inputEmail: "",
            inputPhone: "",
            inputDescription: "",  
            inputZip: "", 
            inputState: "",
            inputCity: "",
            inputStreetAdress: "",
            disabled: true 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
          [name]: value
        });
        if (this.isFormReady(event, value, name)) { 
           if (this.state.disabled === true) {
                    this.setState({
                    disabled: false
                    });
            }
        } else {
           if (this.state.disabled === false) {
                    this.setState({
                    disabled: true
                    })
            } 
        }
    }

    isFormReady(event, value, name) { 
        const obj = this.state;
        for (let key in obj) {
            if (key !== name && key !== 'disabled') { 
                if (obj[key].length === 0) {
                    return false    
                    } 
            } else {
                if (key === name && value.length === 0) {
                    return false
                }
            }
        }
        return true
    }

    makeButtonDisabled() {
        this.setState({
        disabled: true
        })
    }

    sendData() {
        const newUser = {
        id: this.state.inputID,
        firstName: this.state.inputFirstName,
        lastName: this.state.inputLastName,
        email: this.state.inputEmail,
        phone: this.state.inputPhone,
        address: {
            streetAddress: this.state.inputStreetAdress,
            city: this.state.inputCity,
            state: this.state.inputState,
            zip: this.state.inputZip
        },
        description: this.state.inputDescription
        }

        this.props.data.unshift(newUser);
    }

    cleanStates() {
        this.setState({
            inputID: "",
            inputFirstName: "", 
            inputLastName: "",
            inputEmail: "",
            inputPhone: "",
            inputDescription: "",  
            inputZip: "", 
            inputState: "",
            inputCity: "",
            inputStreetAdress: ""
        });
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                    <button 
                        className="btn btn-outline-secondary mb-3"
                        onClick={() => this.props.changeInputState()}
                    >
                        { this.props.isInputingNewUser === false
                          ? 'Open input form to add new user'
                          : 'Hide input form'
                        }
                    </button>
                    { this.props.isInputingNewUser === true &&
                        <button  

                            className="btn btn-outline-secondary mb-3"
                            disabled = {this.state.disabled}
                            onClick={() => {
                            this.sendData()
                            this.makeButtonDisabled()
                            this.cleanStates()
                            }}
                        >
                            Add new user
                        </button>
                    }
                </div>
                { this.props.isInputingNewUser === true  
                    ? <div>
                            <table className="table table-bordered">   
                                <thead>
                                    <tr className = 'table-secondary'>
                                        <th> ID </th>
                                        <th> First Name </th>
                                        <th> Last Name  </th>
                                        <th> E-mail  </th>
                                        <th> Phone </th>
                                    </tr>
                                </thead>   
                                <tbody>
                                    <tr>
                                        <td><input
                                            type="text"
                                            name = "inputID"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputID}
                                            /></td>
                                        <td><input
                                            type="text"
                                            name = "inputFirstName"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputFirstName}
                                            /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputLastName"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputLastName}
                                        /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputEmail"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputEmail}
                                        /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputPhone"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputPhone}
                                        /></td> 
                                        
                                    </tr>  
                                </tbody>
                            </table> 
                            <table className="table table-bordered">  
                                <thead>
                                    <tr className = 'table-secondary'>
                                        <th> Description </th>
                                        <th> Zip </th>
                                        <th> State </th>
                                        <th> City  </th>
                                        <th> Street adress </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input
                                            type="text"
                                            name = "inputDescription"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputDescription}
                                         /></td>
                                        <td><input
                                            type="text"
                                            name = "inputZip"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputZip} 
                                        /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputState"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputState}
                                        /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputCity"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputCity}
                                        /></td>
                                        <td><input 
                                            type="text"
                                            name = "inputStreetAdress"
                                            className="form-control"
                                            onChange={this.handleInputChange}
                                            value={this.state.inputStreetAdress}
                                        /></td> 
                                    </tr>  
                                </tbody> 
                            </table>
                      </div>
                    : null 
                }
            </div>      
        )}
}

export default InputForm;

