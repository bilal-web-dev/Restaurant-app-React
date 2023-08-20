import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData();
    //console.log('I am in Component Did Mount')
  }

  getData() {
    fetch("http://localhost:3000/restaurants").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
        console.log("I am in Get Data");
        console.warn(this.state.list);
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurants/" + id, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((result) => {
        console.log("I am in Delete Function");
        this.getData();
        alert("The Restaurant has been Deleted");
      });
    });
  }

  render() {
    console.log("I am in Render");
    return (
      <Container>
        {console.log("I am in Return")}
        <div className="main-div">
          <div className="main-heading">Restaurants List</div>
          {this.state.list ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>

                      <td>{item.location}</td>
                      <td>{item.rating}</td>
                      <td>
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} />{" "}
                        </Link>
                        <span onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    );
  }
}

export default List;
