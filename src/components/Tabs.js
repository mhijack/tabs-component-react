import React, { Component } from 'react';

class Tabs extends Component {
    state = {
        activeTab: this.props.children[0].props.label,
    }

    /*
    *   @params: String tab, represents label of the tab
    */
    onClickTabItem = tab => {
        this.setState({ activeTab: tab })
    }

    render() {
        const {  }

        return (
            /*
            *   Map over tabs;
                Set content of activeTab 
            */

        )
    }
}

export default Tabs;