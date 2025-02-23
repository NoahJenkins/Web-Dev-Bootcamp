import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.jsx";
import { robots } from "./robots";

class App extends React.Component {
    constructor() { 
        // The constructor is used for initializing the component's state
        super(); // Calls the constructor of the parent class (React.Component)
        this.state = {
            robots: robots, // Initial state for the list of robots
            searchfield: "", // Initial state for the search field (empty string)
        };
    }

    // Event handler for updating searchfield state when user types in the search box
    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        // Filters the robots list based on the search field input
        const filteredRobots = this.state.robots.filter(robot => 
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        );
        console.log(filteredRobots)

        return (
            <div className="tc">
                <h1>RoboFriends</h1> {/* Page title */}
                <SearchBox searchChange={this.OnSearchChange} /> {/* Search input */}
                <CardList robots={filteredRobots} /> {/* Displays filtered robots */}
            </div>
        );
    }
}

export default App;
