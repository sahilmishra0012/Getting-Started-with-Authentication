import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Authenticate/register";
import UpdateProfile from "./components/Profile/updateProfile";
import DisplayProfiles from "./components/Profile/displayProfiles";
import BottomCard from "./components/BottomCard/bottomCard";
import Login from "./components/Authenticate/login";
import Logout from "./components/Authenticate/logout";
import HomeButton from "./components/HomeButton/homeButton";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("authToken") !== null);

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem("authToken") !== null);
  // }, [isLoggedIn]);

  return (
    <>
      
      <Switch>
        <Route path="/register">
          <HomeButton />
          <Register />
        </Route>
        <Route path="/update">
          <HomeButton />
          <UpdateProfile />
        </Route>
        <Route path="/all">
          <HomeButton />
          <DisplayProfiles />
        </Route>
        <Route path="/login">
        <HomeButton />
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <BottomCard />
        </Route>
      </Switch>
    </>
  );
}
