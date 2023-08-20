import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      searchKey: "",
    };
  }

  search(key) {
    this.setState({ searchKey: key });

    fetch("http://localhost:3000/restaurants?q=" + key).then((response) => {
      response.json().then((result) => {
        if (result.length > 0 && key !== "") {
          this.setState({ searchData: result, noData: false });
        } else if (key === "") {
          this.setState({ searchData: null, noData: false });
        } else {
          this.setState({ searchData: null, noData: true });
        }
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurants/" + id, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((result) => {
        this.search(this.state.searchKey);
        alert("The Restaurant has been Deleted");
      });
    });
  }

  render() {
    return (
      <Container>
        <div className="main-heading">Search Restaurants</div>

        <Form className="d-flex">
          <Form.Control
            style={{ margin: 30 }}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => {
              this.search(event.target.value);
            }}
          />
        </Form>

        <div>
          {this.state.searchData ? (
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
                  {this.state.searchData.map((item, i) => (
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
            " "
          )}

          <div className="main-div">
            {this.state.noData ? <h2>No Data Found</h2> : " "}
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
