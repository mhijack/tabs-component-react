import React, { Component } from 'react';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';

class Tab extends Component {
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
