import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Titles } from './components/title/title.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handlechange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value } );
  };

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <Titles title={title} />
        <SearchBox
          placeholder="Search Monster"
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
