import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };

    state = {
        activeTab: null
    };

    componentDidMount = () => {
        this.setState({ activeTab: this.props.children[0].props.label });
    };

    /*
    *   @params: String tab, represents label of the tab
    */
    onClickTabItem = tab => {
        console.log('set state');
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab }
        } = this;

        return (
            /*
            *   Map over tabs;
                Set content of activeTab, others to undefined
            */
            <div className="tabs">
                <ul className="tab-list">
                    {children.map(tab => {
                        const { label } = tab.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ul>

                <div className="tab-content">
                    {children.map(child => {
                        return child.props.label === activeTab
                            ? child.props.children
                            : undefined;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
