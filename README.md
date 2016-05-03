# react-multiple-select-box
a react multiple treeview select supports async load and hierarchy display

## Demo
http://wheatma.github.io/react-multiple-select-box/

## Installation

```bash
$ npm install react-multiple-select-box --save
```


##default props
<table class="table table-bordered table-striped table-condensed">
    <tr>
        <td>key</td>
        <td>default</td>
        <td></td>
    </tr>
    <tr>
        <td>label</td>
        <td>Choose ...</td>
        <td></td>
    </tr>
    <tr>
        <td>closeText</td>
        <td>close</td>
        <td></td>
    </tr>
    <tr>
        <td>clearText</td>
        <td>clear</td>
        <td></td>
    </tr>
    <tr>
        <td>confirmText</td>
        <td>ok</td>
        <td></td>
    </tr>
    <tr>
        <td>cancelText</td>
        <td>cancel</td>
        <td></td>
    </tr>
    <tr>
        <td>selectedLabel</td>
        <td>selected</td>
        <td></td>
    </tr>
    <tr>
        <td>nameText</td>
        <td>(empty string)</td>
        <td></td>
    </tr>
    <tr>
        <td>value</td>
        <td>[]</td>
        <td>default selected value, e.g. [{id: 1, text: "value 1"}, {id: 2, text: "value 2"}]</td>
    </tr>
    <tr>
        <td>options</td>
        <td>[]</td>
        <td>select options, e.g.[{id: 1, text: "value 1", subLen: 2, sub: [{id: 2, text: "value 2"}, {id: 3, text: "value 3"}]}, {id: 4, text: "value 4"}]</td>
    </tr>
    <tr>
        <td>async</td>
        <td>false</td>
        <td>whether need to async load data. if set true, the async load options should have key "subLen"</td>
    </tr>
    <tr>
        <td>onConfirmCallback</td>
        <td>() => {}</td>
        <td>confirm callback function</td>
    </tr>
    <tr>
        <td>onCancelCallback</td>
        <td>() => {}</td>
        <td>cancel callback function</td>
    </tr>
</table>