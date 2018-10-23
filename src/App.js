import React, { Component } from 'react';

import Tabs from './components/Tabs';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Tabs Demo</h1>

                <Tabs>
                    <div label="Gator">
                        See ya later, <em>Alligator</em>!
                    </div>

                    <div label="Croc">
                        After 'while, <em>Crocodile</em>!
                    </div>

                    <div label="Sarcosuchus">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default App;
