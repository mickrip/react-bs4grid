'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

require('./scss/bootstrap-grid.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evalAlignSelf = function evalAlignSelf(prop) {
  return prop ? 'align-self-' + prop : false;
};

var evalWidths = function evalWidths(props) {
  return ['sm', 'md', 'lg', 'xl'].map(function (size) {
    var propValue = props[size];
    return propValue ? 'col-' + size + '-' + propValue : false;
  });
};

var evalAlignItems = function evalAlignItems(alignItems) {
  return alignItems ? 'rbs4-flex align-items-' + alignItems : undefined;
};

var evalPush = function evalPush(push) {
  return push ? 'rbs4-push-' + push : undefined;
};

var evalAutos = function evalAutos(props) {
  var p = props.w || props.width;
  return p !== undefined ? 'col-' + p : false;
};

var Col = function Col(props) {
  var classes = (0, _classnames2.default)(props.responsiveParent === false || props.w ? 'col' : false, props.responsiveParent === true && !props.w ? 'col-sm' : false, { 'rbs4-no-gutter': props.noGutter }, evalAlignSelf(props.alignSelf), evalWidths(props), evalAlignItems(props.alignItems), evalAutos(props), evalPush(props.push), props.className);

  return _react2.default.createElement(
    'div',
    { className: classes, key: props.key, style: props.style },
    props.children
  );
};

var widthPt = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

Col.propTypes = {
  noGutter: _propTypes2.default.bool,
  alignSelf: _propTypes2.default.string,
  alignItems: _propTypes2.default.string,
  push: _propTypes2.default.string,
  style: _reactStyleProptype2.default,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  key: _propTypes2.default.number,
  className: _propTypes2.default.string,
  responsiveParent: _propTypes2.default.bool,
  w: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  sm: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  md: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  lg: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  xl: widthPt
};

Col.defaultProps = {
  noGutter: false,
  alignSelf: undefined,
  alignItems: undefined,
  push: undefined,
  className: undefined,
  responsiveParent: true,
  style: {},
  key: 1,
  w: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined
};

exports.default = Col;