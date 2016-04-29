(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var idInc = 0;
	
	var interceptEvent = function interceptEvent(event) {
	    if (event) {
	        event.preventDefault();
	        event.stopPropagation();
	    }
	};
	
	var toggleClass = function toggleClass() {
	    var fullClassName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var className = arguments[1];
	
	    return fullClassName.includes(className) ? fullClassName.replace(className, '') : fullClassName.trim() + ' ' + className;
	};
	
	var removeClass = function removeClass() {
	    var fullClassName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var className = arguments[1];
	
	    return fullClassName.replace(className, '');
	};
	
	var addClass = function addClass() {
	    var fullClassName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	    var className = arguments[1];
	
	    return fullClassName.trim() + ' ' + className;
	};
	
	var MultipleSelectBox = function (_Component) {
	    _inherits(MultipleSelectBox, _Component);
	
	    function MultipleSelectBox(props, context) {
	        _classCallCheck(this, MultipleSelectBox);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MultipleSelectBox).call(this, props, context));
	
	        _this.clickingOption = false;
	        _this.blurTimeout = null;
	        _this.state = {
	            id: 'react-multi-select-box-' + ++idInc,
	            open: false,
	            focusedIndex: -1,
	            pendingValue: _this.props.value,
	            value: _this.props.value,
	            options: _this.props.options
	        };
	        return _this;
	    }
	
	    _createClass(MultipleSelectBox, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;
	
	            if (this.state.options.length === 0 && this.props.async && typeof this.props.asyncFetch == 'function') {
	                this.props.asyncFetch(-1).then(function (data) {
	                    _this2.setState({
	                        options: data
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                pendingValue: nextProps.value,
	                value: nextProps.value
	            });
	        }
	    }, {
	        key: 'label',
	        value: function label() {
	            var selected = this.state.value.map(function (option) {
	                return option.text;
	            });
	            return selected.length > 0 ? selected.join(', ') : this.props.label;
	        }
	    }, {
	        key: 'value',
	        value: function value() {
	            return this.state.value;
	        }
	    }, {
	        key: 'hasValue',
	        value: function hasValue() {
	            return this.value().length > 0;
	        }
	    }, {
	        key: 'handleConfirm',
	        value: function handleConfirm() {
	            var _this3 = this;
	
	            var value = this.state.pendingValue;
	            this.setState({
	                open: false,
	                value: value
	            }, function () {
	                _this3.props.onConfirmCallback(_this3.state.value);
	            });
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            var _this4 = this;
	
	            var pendingValue = this.state.value;
	            this.setState({
	                open: false,
	                pendingValue: pendingValue
	            }, function () {
	                _this4.props.onCancelCallback();
	            });
	        }
	    }, {
	        key: 'isInclude',
	        value: function isInclude(value, id) {
	            var isIn = false;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var o = _step.value;
	
	                    if (id == o.id) {
	                        isIn = true;
	                        break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return isIn;
	        }
	    }, {
	        key: 'getPendingValueIndex',
	        value: function getPendingValueIndex(id) {
	            var key = 0,
	                index = -1,
	                pendingValue = this.state.pendingValue;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = pendingValue[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var o = _step2.value;
	
	                    if (id == o.id) {
	                        index = key;
	                        break;
	                    } else {
	                        key++;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return index;
	        }
	    }, {
	        key: 'toggleOpenClose',
	        value: function toggleOpenClose(event) {
	            interceptEvent(event);
	            this.setState({
	                open: !this.state.open
	            });
	            if (this.state.open) {
	                return this.setState({
	                    open: false
	                });
	            }
	
	            this.handleOpen();
	        }
	    }, {
	        key: 'handleOpen',
	        value: function handleOpen(event) {
	            var _this5 = this;
	
	            interceptEvent(event);
	            this.setState({
	                open: true
	            }, function () {
	                _this5.refs.selectArea.focus();
	            });
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose(event) {
	            interceptEvent(event);
	            if (!this.clickingOption) {
	                this.setState({
	                    open: false,
	                    focusedIndex: -1
	                });
	            }
	            this.handleCancel();
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus() {
	            clearTimeout(this.blurTimeout);
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur() {
	            clearTimeout(this.blurTimeout);
	            this.blurTimeout = setTimeout(this.handleClose.bind(this), 0);
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown() {
	            this.clickingOption = true;
	        }
	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(item, event) {
	            var _this6 = this;
	
	            var pendingValue = this.state.pendingValue;
	            if (!event.target.className.includes('react-multi-select-box-option-selected')) {
	                this.setState({
	                    pendingValue: [].concat(_toConsumableArray(pendingValue), [item])
	                });
	            } else {
	                (function () {
	                    var index = _this6.getPendingValueIndex(item.id);
	                    setTimeout(function () {
	                        if (index >= 0) {
	                            _this6.setState({
	                                pendingValue: [].concat(_toConsumableArray(pendingValue.slice(0, index)), _toConsumableArray(pendingValue.slice(index + 1)))
	                            });
	                        }
	                    }, 10);
	                })();
	            }
	        }
	    }, {
	        key: 'handleSelectedOptionClick',
	        value: function handleSelectedOptionClick(index, event) {
	            var pendingValue = this.state.pendingValue;
	            this.setState({
	                pendingValue: [].concat(_toConsumableArray(pendingValue.slice(0, index)), _toConsumableArray(pendingValue.slice(index + 1)))
	            });
	        }
	    }, {
	        key: 'handleToggleOption',
	        value: function handleToggleOption(key, index, loaded, event) {
	            var _this7 = this;
	
	            var iconDOM = event.currentTarget.firstChild;
	            var ulDOM = event.currentTarget.parentNode.lastChild;
	            if (!this.props.async || loaded) {
	                iconDOM.setAttribute('class', toggleClass(iconDOM.getAttribute('class'), 'expand'));
	                ulDOM.setAttribute('class', toggleClass(ulDOM.getAttribute('class'), 'react-multi-select-hide'));
	            } else {
	                this.props.asyncFetch(key).then(function (items) {
	                    _this7.setState({
	                        options: _this7.setOption(_this7.state.options, items, index)
	                    });
	                    iconDOM.setAttribute('class', toggleClass(iconDOM.getAttribute('class'), 'expand'));
	                    ulDOM.setAttribute('class', toggleClass(ulDOM.getAttribute('class'), 'react-multi-select-hide'));
	                });
	            }
	        }
	    }, {
	        key: 'setOption',
	        value: function setOption(options, items, index) {
	            var keys = index.split('-');
	            var tmp = options;
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var i = _step3.value;
	
	                    i = +i;
	                    if (!tmp[i]['sub']) {
	                        tmp[i]['sub'] = [];
	                    }
	                    tmp = tmp[i]['sub'];
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            Array.prototype.push.apply(tmp, items);
	            return options;
	        }
	    }, {
	        key: 'renderButton',
	        value: function renderButton() {
	            var label = this.label();
	            var title = this.hasValue() ? label : '';
	            return _react2.default.createElement(
	                'button',
	                { className: 'react-multi-select-box', ref: 'button', tabIndex: '0', onClick: this.toggleOpenClose.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'react-multi-select-box-label', title: title },
	                    label
	                )
	            );
	        }
	    }, {
	        key: 'renderOption',
	        value: function renderOption(item, index, key) {
	            if (item.hasOwnProperty('subLen') || item.hasOwnProperty('sub')) {
	                return this.renderClassification(item, index, key);
	            } else {
	                return this.renderRow(item);
	            }
	        }
	    }, {
	        key: 'renderClassification',
	        value: function renderClassification(item, index, key) {
	            var _this8 = this;
	
	            var loaded = item.hasOwnProperty('sub') && item.sub.length == item.subLen ? true : false;
	            if (key === '') {
	                key = item.id;
	            } else {
	                key += '-' + item.id;
	            }
	            return _react2.default.createElement(
	                'li',
	                { key: key, className: 'react-multi-select-classification' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'classification', onClick: this.handleToggleOption.bind(this, key, index, loaded), loaded: loaded },
	                    _react2.default.createElement('i', { className: 'react-multi-select-list-arrow' }),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        item.text + '(' + (item.subLen ? item.subLen : item.sub ? item.sub.length : 0) + ')'
	                    )
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { key: 'sub' + item.id, className: 'react-multi-select-sub-options react-multi-select-hide' },
	                    loaded && item.sub.map(function (sub, i) {
	                        return _this8.renderOption(sub, index + '-' + i, key);
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'renderRow',
	        value: function renderRow(item) {
	            var className = 'react-multi-select-box-option';
	            if (this.isInclude(this.state.pendingValue, item.id)) {
	                className += ' react-multi-select-box-option-selected';
	            }
	            return _react2.default.createElement(
	                'li',
	                { key: item.id, className: 'react-multi-select-list-option' },
	                _react2.default.createElement(
	                    'div',
	                    { className: className, value: item.id, label: item.text, onClick: this.handleSelect.bind(this, item) },
	                    item.text
	                )
	            );
	        }
	    }, {
	        key: 'renderSelectOption',
	        value: function renderSelectOption() {
	            var _this9 = this;
	
	            return _react2.default.createElement(
	                'ul',
	                { className: 'react-multi-select-col' },
	                this.state.options.map(function (item, index) {
	                    return _this9.renderOption(item, index + '', '');
	                })
	            );
	        }
	    }, {
	        key: 'renderSelectedOption',
	        value: function renderSelectedOption(item, index) {
	            return _react2.default.createElement(
	                'li',
	                { key: item.id, className: 'selected-option-row', onClick: this.handleSelectedOptionClick.bind(this, index) },
	                item.text
	            );
	        }
	    }, {
	        key: 'renderSelectedValue',
	        value: function renderSelectedValue() {
	            var _this10 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'react-multi-select-col' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'react-multiple-select-type-name' },
	                    '已选',
	                    this.props.nameText,
	                    '：'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    this.state.pendingValue.map(function (item, index) {
	                        return _this10.renderSelectedOption(item, index);
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'renderSelectOptBtn',
	        value: function renderSelectOptBtn() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'react-multi-select-area-btn' },
	                _react2.default.createElement(
	                    'button',
	                    { className: 'react-multi-select-btn', onClick: this.handleConfirm.bind(this) },
	                    this.props.confirmText
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { className: 'react-multi-select-btn react-multi-select-btn-white', onClick: this.handleCancel.bind(this) },
	                    this.props.cancelText
	                )
	            );
	        }
	    }, {
	        key: 'renderSelectArea',
	        value: function renderSelectArea() {
	            var className = 'react-multi-select-area';
	            if (!this.state.open) {
	                className += ' react-multi-select-box-hidden';
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: className, ref: 'selectArea', ariaHidden: true, tabIndex: '0', onBlur: this.handleBlur.bind(this), onFocus: this.handleFocus.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'react-multi-select-panel', tabIndex: '-1' },
	                    this.renderSelectOption(),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'react-multi-select-sign' },
	                        _react2.default.createElement('i', null)
	                    ),
	                    this.renderSelectedValue()
	                ),
	                this.renderSelectOptBtn()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var className = 'react-multi-select-box-container';
	            if (this.props.className) {
	                className += ' ' + this.props.className;
	            }
	            if (!this.hasValue()) {
	                className += ' react-multi-select-box-empty';
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: className, id: this.state.id },
	                this.renderButton(),
	                this.renderSelectArea()
	            );
	        }
	    }]);
	
	    return MultipleSelectBox;
	}(_react.Component);
	
	MultipleSelectBox.defaultProps = {
	    label: 'Choose ...',
	    closeText: 'close',
	    clearText: 'clear',
	    confirmText: 'ok',
	    cancelText: 'cancel',
	    nameText: '',
	    value: [],
	    options: [],
	    requestUrl: '/',
	    async: false,
	    onConfirmCallback: function onConfirmCallback() {},
	    onCancelCallback: function onCancelCallback() {}
	};
	exports.default = MultipleSelectBox;
	;
	
	MultipleSelectBox.propTypes = {};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-multiple-select-box.js.map