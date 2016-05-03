import React from 'react'

import ReactDOM from 'react-dom'

import { SimpleDisplayApp, HierarchyDisplayApp, AsyncLoadApp } from './app'

import './css/main.scss'

import './css/multiple-select-box.scss'

ReactDOM.render(
    <SimpleDisplayApp />,
    document.getElementById('career')
)

ReactDOM.render(
    <HierarchyDisplayApp />,
    document.getElementById('city')
)

ReactDOM.render(
    <AsyncLoadApp />,
    document.getElementById('region')
)
