import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const { id: routeId } = useParams();

  useEffect(() => {
    console.warn(routeId);

    fetch("http://localhost:3000/restaurants/" + routeId)
      .then((response) => response.json())
      .then((result) => {
        setId(result.id);
        setName(result.name);
        setLocation(result.location);
        setRating(result.rating);
      });
  }, [routeId]);

  const update = () => {
    fetch("http://localhost:3000/restaurants/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, location, rating }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert("The Restaurant has been Updated");
        navigate("/list");
      });
  };

  return (
    <div>
      <div className="main-div">
        <div className="main-heading">Update Restaurants</div>
        <input
          placeholder="Enter Restaurant Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter Restaurant Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter Restaurant Rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <br />
        <br />
        <Button onClick={update}>Update Restaurant</Button>
      </div>
    </div>
  );
};

export default Update;
