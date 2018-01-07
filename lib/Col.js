'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./scss/bootstrap-grid.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evalAlignSelf = function evalAlignSelf(prop) {
  return prop ? 'align-self-' + prop : false;
};

var evalWidths = function evalWidths(props) {
  return ['xs', 'sm', 'md', 'lg', 'xl'].map(function (size) {
    var propValue = props[size];
    return propValue ? 'col-' + size + '-' + propValue : false;
  });
};

var evalAlignItems = function evalAlignItems(_ref) {
  var alignItems = _ref.alignItems;
  return alignItems ? 'rbs4-flex align-items-' + alignItems : undefined;
};

var evalPush = function evalPush(_ref2) {
  var push = _ref2.push;
  return push ? 'rbs4-push-' + push : undefined;
};

var evalAutos = function evalAutos(props) {
  var p = props.w || props.width;
  return p !== undefined ? 'col-' + p : false;
};

var Col = function Col(props) {
  var classes = (0, _classnames2.default)(props.responsiveParent === false || props.w ? 'col' : false, props.responsiveParent === true && !props.w ? 'col-sm' : false, { 'rbs4-no-gutter': props.noGutter }, evalAlignSelf(props.alignSelf), evalWidths(props), evalAlignItems(props), evalAutos(props), evalPush(props), props.className);

  return _react2.default.createElement(
    'div',
    { className: classes, key: props.key, style: props.style },
    props.children
  );
};

Col.propTypes = {
  noGutter: _propTypes2.default.bool,
  alignSelf: _propTypes2.default.string,
  alignItems: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Col.defaultProps = {
  debug: false,
  responsiveParent: true
};

exports.default = Col;