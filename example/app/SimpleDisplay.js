import React, { Component } from 'react';

import MultipleSelectBox from 'react-multiple-select-box';

import { career } from './configs';

export default class SimpleDisplayApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            options: career,
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
                    nameText="career"
                />
            </div>
        )
    }
}
