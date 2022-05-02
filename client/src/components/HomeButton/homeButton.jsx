import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
          }}
          color="primary"
          variant="contained"
        >
          Home
        </Button>
      </Link>
    </>
  );
}
