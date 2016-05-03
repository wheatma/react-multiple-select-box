import React, { Component } from 'react';

import 'whatwg-fetch';

import MultipleSelectBox from 'react-multiple-select-box';

import { region } from './configs';

export default class AsyncLoadApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = ({
            options: region,
            value: [{id: 41, text: '西湖'}]
        });
    }

    asyncFetch(id) {
        return fetch('/react-multiple-select-box/mocks/region.json?id=' + id).then(res => {
            // res instanceof Response == true.
            return res.json().then(data => data.data);
        }, e => {
            console.log("Fetch failed!", e);
        });

    }

    render() {
        return (
            <div className="container">
                <MultipleSelectBox
                    options={this.state.options}
                    value={this.state.value}
                    selectedLabel="selected "
                    nameText="region"
                    async={true}
                    asyncFetch={::this.asyncFetch}
                />
            </div>
        )
    }
}
