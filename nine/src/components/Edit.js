import React from "react";
import { Col, Form, FormGroup, Input, Navbar, Button } from "reactstrap";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateItem();
  }
  render() {
    return (
      <div className="editPage">
      <Navbar className="landNav">
        <h2>Top 3</h2>
        <Button color="primary" href="/home">Home</Button>
      </Navbar>
      
      <div className="addCard">
        <h3 className="title1">Edit Here</h3>
        <Form className="formMovie" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Input
                type="edit"
                name="movie"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </FormGroup>
          </Col>
          <Button color="primary" type="submit">Edit</Button>
        </Form>
      </div>
    </div>
  );
}
};

export default Edit;

