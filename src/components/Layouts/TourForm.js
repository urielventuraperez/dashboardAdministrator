import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../../redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    addStudent: student => dispatch(addStudent(student))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      nombre: "",
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  incrementID(id){
    return parseInt(id)+1
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const nombre = this.state.nombre;
    const id = this.incrementID(this.state.id);
    this.props.addStudent({ nombre, id });
    this.setState({ nombre:"" });
    this.setState({ id });
  }

  render() {
    const form = "Forms";
    const { nombre } = this.state;
    return (
      <div>
        {form}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
