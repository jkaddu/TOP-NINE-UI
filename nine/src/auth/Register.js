import React from "react";
import { Col, Form, FormGroup, Input, Navbar, Button, Label } from "reactstrap";
import axios from "axios";

class Signup extends React.Component {
  state = {
    newUser: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  validate = () => {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    if (input1.value !== "" && input2 !== "") {
      if (input1.value === input2.value) {
        return true;
      }
    }
    alert("Passwords don't match");
    return false;
  };

  register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://top9-the2nd.herokuapp.com/api/auth/register",
        this.state.newUser
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <div>
          <Navbar className="landNav">
            <h2>Top 3</h2>
            <Button color="primary" href="/login">Sign In</Button>
          </Navbar>
       
      
        <div className="register">
          <h1>Registration</h1>
          <Form className="form" onSubmit={this.register}>
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  id="input1"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Confirm Password</Label>
                <Input
                  id="input2"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>

            <Button color="primary">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
