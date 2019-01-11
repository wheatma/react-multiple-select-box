# react-multiple-select-box
A react treeview multiple select supports async load and hierarchy display

[![Build Status](https://travis-ci.org/wheatma/react-multiple-select-box.svg?branch=master)](https://travis-ci.org/wheatma/react-multiple-select-box)

## Demo
http://wheatma.github.io/react-multiple-select-box/

## Installation

```bash
$ npm install react-multiple-select-box --save
```


## default props
| key | default |  |
| :------ | :------| :------ |
| label | Choose ... |  |
| closeText | close|  |
| clearText | ok |  |
| cancelText | cancel |  |
| selectedLabel | selected |  |
| nameText | (empty string) |  |
| value | [] | default selected value, e.g. [{id: 1, text: "value 1"}, {id: 2, text: "value 2"}] |
| options | [] | select options, e.g.[{id: 1, text: "value 1", subLen: 2, sub: [{id: 2, text: "value 2"}, {id: 3, text: "value 3"}]}, {id: 4, text: "value 4"}] |
| async | false | whether need to load data asynchronously. if set to be true, the async load options should have key `subLen` |
| asyncFetch |  | if async is set to be true, you should add this prop, a function returns a promise. see more info in the `example/app/app.js` |
| onConfirmCallback | () => {} | confirm callback function |
| onCancelCallback | () => {} | cancel callback function |
