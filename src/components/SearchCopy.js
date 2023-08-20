import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
    };
  }

  search(key) {
    const data = key;
    fetch("http://localhost:3000/restaurants?q=" + key).then((response) => {
      response.json().then((result) => {
        if (result.length > 0) {
          this.setState({ searchData: result, noData: false });
        } else {
          this.setState({ searchData: null, noData: true });
        }
      });
    });
  }

  render() {
    return (
      <div>
       <input placeholder="Search" aria-label="Search" type="search" class="me-2 form-control" onChange={(event) => {
              this.search(event.target.value);
            }}></input>

        <div>
          {this.state.searchData ? (
            <div className="main-div">
              {this.state.searchData.map((item) => (
                <div className="data-row">
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <div className="main-div">{this.state.noData ? <h2>No Data Found</h2> : " "}</div>
        </div>
      </div>
    );
  }
}

export default Search;
