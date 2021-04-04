import home from "./home.svg";
import fav from "./fav.svg";
import settings from "./settings.svg";
import profile from "./profile.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("HOME");

  function handleTitleChange(name) {
    setTitle(name);
  }

  function handleNavBarClick(name) {
    setTitle(name);
  }

  return (
    <div className="App">
      <Header title={title} />
      <NavBar handleNavBarClick={handleNavBarClick} />
      <Input handleTitleChange={handleTitleChange} />
    </div>
  );
}

export default App;

function Header({ title }) {
  return <header>{title}</header>;
}

function NavBar({ handleNavBarClick }) {
  function handleHomeClick() {
    handleNavBarClick("HOME");
  }
  function handleFavoritesClick() {
    handleNavBarClick("FAVORITES");
  }
  function handleSettingsClick() {
    handleNavBarClick("SETTINGS");
  }
  function handleProfileClick() {
    handleNavBarClick("PROFILE");
  }

  return (
    <div className="NavBar">
      <button onClick={handleHomeClick}>
        <img src={home} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleFavoritesClick}>
        <img src={fav} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleSettingsClick}>
        <img src={settings} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleProfileClick}>
        <img src={profile} className="App-logo" alt="logo" />
      </button>
    </div>
  );
}

function Input({ handleTitleChange }) {
  return <AnotherDiv handleTitleChange={handleTitleChange} />;
}

function AnotherDiv({ handleTitleChange }) {
  return <YouGottaBeKiddingMeDiv handleTitleChange={handleTitleChange} />;
}

function YouGottaBeKiddingMeDiv({ handleTitleChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInput = form.name.value.toUpperCase();
    handleTitleChange(formInput);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        placeholder="Type here any title you like"
      ></input>
      <button type="submit">Change header title from input</button>
    </form>
  );
}
