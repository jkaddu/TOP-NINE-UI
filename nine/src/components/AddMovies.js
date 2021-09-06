import React from "react";

import { Form, FormGroup, Input, Col, Navbar, Button } from "reactstrap";

class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChanges = (e) =>  {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputValue)
    this.props.addMovie(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="addMovie">
        <Navbar className="landNav">
          <h2>Top 3</h2>
          <Button color="primary" href="/home">Home</Button>
        </Navbar>
       
        <div className="addCard">
          <h3 className="title1">Movie</h3>
          <Form className="formMovie" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="movie"
                  value={this.state.inputValue}
                  onChange={this.handleChanges}
                  />
              </FormGroup>
            </Col>
            <Button color="primary">Add</Button>
          </Form>
        </div>
      </div>
    );
  }
  }

export default AddMovie;

