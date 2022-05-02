import React from "react";
import Button from "@material-ui/core/Button";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function BottomCard() {
  return (
    <>
      <div
        style={{
          margin: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
            margin: "auto",
          }}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Link style={{ minWidth: "200px" }} to="/register">
              <Button
                color="primary"
                variant="outlined"
                style={{ margin: "10px", minWidth: "200px" }}
              >
                Register
              </Button>
            </Link>

            <Link style={{ minWidth: "200px" }} to="/login">
              <Button
                color="primary"
                variant="outlined"
                style={{ margin: "10px", minWidth: "200px" }}
              >
                Login
              </Button>
            </Link>

            <Link style={{ minWidth: "200px" }} to="/all">
              <Button
                color="primary"
                variant="outlined"
                style={{ margin: "10px", minWidth: "200px" }}
              >
                View all Profiles
              </Button>
            </Link>
            <Link style={{ minWidth: "200px" }} to="/update">
              <Button
                color="primary"
                variant="outlined"
                style={{ margin: "10px", minWidth: "200px" }}
              >
                Update your Profile
              </Button>
            </Link>
            <Link style={{ minWidth: "200px" }} to="/logout">
              <Button
                color="primary"
                variant="outlined"
                style={{ margin: "10px", minWidth: "200px" }}
              >
                Logout
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
