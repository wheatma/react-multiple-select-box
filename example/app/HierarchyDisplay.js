import React, { Component } from 'react';

import MultipleSelectBox from 'react-multiple-select-box';

import { city } from './configs';

export default class HierarchyDisplayApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            options: city,
            value: []
        };
    }

    render() {
        return (
            <div className="container">
                <MultipleSelectBox
                    options={this.state.options}
                    value={this.state.value}
                    selectedLabel="selected "
                    nameText="city"
                />
            </div>
        )
    }
}
