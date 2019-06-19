import React, {Component} from 'react';
import { connect } from "react-redux";
import { addStudent } from "../../redux/actions";

function mapDispatchToProps(dispatch){
    return {
        addStudent: student => dispatch(addStudent(student))
    }
}

class ConnectedForm extends Component{
    
    constructor(){
        super();

        this.state = {
            nombre: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { nombre } = this.state;
        const id = 1;
        this.props.addStudent({ nombre, id });
        this.setState({ nombre: "" });
    }

    render(){
        const form = "Forms";
        const {nombre} = this.state;
        return(
            <div>
                {form}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                         type="text"
                         id="title"
                         value={nombre}
                         onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;