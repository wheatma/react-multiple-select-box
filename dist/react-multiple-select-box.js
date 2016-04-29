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
	
	__webpack_require__(2);
	
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
	
	            if (this.state.options.length === 0 && this.props.async && this.props.requestUrl) {
	                fetch(this.props.requestUrl + '?id=-1').then(function (res) {
	                    // res instanceof Response == true.
	                    if (res.ok) {
	                        res.json().then(function (data) {
	                            _this2.setState({
	                                options: data.data
	                            });
	                        });
	                    } else {
	                        console.log("Looks like the response wasn't perfect, got status", res.status);
	                    }
	                }, function (e) {
	                    console.log("Fetch failed!", e);
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
	                fetch(this.props.requestUrl + '?id=' + key).then(function (res) {
	                    // res instanceof Response == true.
	                    if (res.ok) {
	                        res.json().then(function (data) {
	                            var items = data.data;
	                            var options = _this7.state.options;
	                            options = _this7.setOption(options, items, index);
	                            _this7.setState({
	                                options: options
	                            });
	                            iconDOM.setAttribute('class', toggleClass(iconDOM.getAttribute('class'), 'expand'));
	                            ulDOM.setAttribute('class', toggleClass(ulDOM.getAttribute('class'), 'react-multi-select-hide'));
	                        });
	                    } else {
	                        console.log("Looks like the response wasn't perfect, got status", res.status);
	                    }
	                }, function (e) {
	                    console.log("Fetch failed!", e);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-multiple-select-box.js.map