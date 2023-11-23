import React from "react";

const page = () => {
  return (
    <div className="jumbotron d-flex flex-column justify-content-center align-items-center ">
      <div className="container">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default page;
