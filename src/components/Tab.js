import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    handleClick = e => {
        const { label, onClick, activeTab } = this.props;

        // Ony set state if tab clicked is NOT activeTab
        activeTab !== label && onClick(label);
    };

    render() {
        const {
            props: { label, activeTab },
            handleClick
        } = this;
        const classes = ['tab-list-item'];
        activeTab === label && classes.push('tab-list-active');

        return (
            <div onClick={handleClick} className={classes.join(' ')}>
                {label}
            </div>
        );
    }
}

export default Tab;
