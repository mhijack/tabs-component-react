import React, { Component } from 'react';
import Select from 'react-select';

/*
    Each option in the dropdown menu must be of format:
    [
        { label: 'String', value: 'String' },
        ...
    ]
*/
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class DropdownMenu extends Component {
    state = {
        selectedOption: null
    };

    /*  @params: the selected option object // { label: '', value: '' }
    */
    handleSelectionChange = option => {
        this.setState({ selectedOption: option.value });
    };

    /*  @params: 
    */

    render() {
        return (
            <Select options={options} onChange={this.handleSelectionChange} placeholder="Select your favorite flavor of ice cream ~" />
        );
    }
}

export default DropdownMenu;
