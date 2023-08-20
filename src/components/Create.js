import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      location: null,
      rating: null,
    };
  }

  create() {
    fetch("http://localhost:3000/restaurants", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        alert("The Restaurant has been Added");
      });
    });
  }

  render() {
    return (
      <Container>
        <div className="main-div">
          <div className="main-heading">Add Restaurants</div>
          <input
            placeholder="Enter Restaurant Name"
            onChange={(event) => this.setState({ name: event.target.value })}
          />{" "}
          <br />
          <br />
          <input
            placeholder="Enter Restaurant Location"
            onChange={(event) =>
              this.setState({ location: event.target.value })
            }
          />
          <br />
          <br />
          <input
            placeholder="Enter Restaurant Rating"
            onChange={(event) => this.setState({ rating: event.target.value })}
          />
          <br />
          <br />
          <Button onClick={() => this.create()}>Add Restaurant</Button>
        </div>
      </Container>
    );
  }
}

export default Create;
