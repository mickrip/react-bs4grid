'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstChildIsOfType = exports.shouldThisComponentBeInjectedWithProps = exports.showChildrenBasedOnType = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Basically enhances {this.props.children}
 * Accepts props object and an array of prop names to pass down to all children elements.
 * Copes with React Elements, or an array of React Elements, or a String.
 *
 * @param props
 * @param propsToPassDown
 * @returns {*}
 */

var showChildrenBasedOnType = exports.showChildrenBasedOnType = function showChildrenBasedOnType(props) {
  var propsToPassDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!props.children) return _react2.default.createElement('span', null);

  var passDownProps = function passDownProps() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var o = { key: key };
    propsToPassDown.forEach(function (val) {
      o[val + 'Parent'] = props[val];
    });
    return o;
  };

  var isMappable = Object.prototype.toString.call(props.children) === '[object Array]';
  var isString = Object.prototype.toString.call(props.children) === '[object String]';

  // return if it's just a string
  if (isString) return props.children;

  var getElement = function getElement(elem, props) {
    return shouldThisComponentBeInjectedWithProps(elem) ? _react2.default.cloneElement(elem, props) : elem;
  };

  return !isMappable ? getElement(props.children, passDownProps(1)) : props.children.map(function (child, key) {
    return getElement(child, passDownProps(key));
  });
};

/**
 *
 * Determines if the component can except arbitrary props.
 *
 * @param component
 * @returns {boolean}
 */

var shouldThisComponentBeInjectedWithProps = exports.shouldThisComponentBeInjectedWithProps = function shouldThisComponentBeInjectedWithProps(component) {
  if (component.type === undefined) return false;
  return component.type.prototype;
};

/**
 * Looks at the children and ensures first child is "typeToCheck".
 * Used to ensure that Container has Row as a child, and Row has a Col.
 *
 * @param children
 * @param typeToCheck
 * @returns {boolean}
 */

var firstChildIsOfType = exports.firstChildIsOfType = function firstChildIsOfType(children, typeToCheck) {
  var checkElement = Object.prototype.toString.call(children) === '[object Array]' ? children[0] : children;
  var isColElement = function isColElement(elem) {
    if (elem.type) {
      return elem.type.name === typeToCheck;
    }
    return false;
  };
  return isColElement(checkElement);
};