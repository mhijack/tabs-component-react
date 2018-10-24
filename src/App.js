import React, { Component } from 'react';

import Tabs from './components/Tabs';
import DropdownMenu from './components/DropdownMenu';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Tabs Demo</h1>

                <Tabs>
                    <div label="Single-Select">
                        <DropdownMenu />
                    </div>

                    <div label="Multi-Select">
                        After 'while, <em>Crocodile</em>!
                    </div>

                    {/* <div label="Sarcosuchus">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div> */}
                </Tabs>
            </div>
        );
    }
}

export default App;
