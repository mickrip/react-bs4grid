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

require('./css.scss');

var _helpers = require('./helpers');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  var classes = (0, _classnames2.default)({ container: !props.fluid && !props.fluidFull }, { 'container-fluid': props.fluid || props.fluidFull }, { 'rbs4-container-fluid-full': props.fluidFull || props.fluid && props.noGutters }, props.className, { 'rbs4-debug': props.debug });

  /* Check if first child is a <Row>. If not, wrap it in
         a <Row> and pass down some props. */
  if ((0, _helpers.firstChildIsOfType)(props.children, 'Row')) {
    return _react2.default.createElement(
      'div',
      { className: classes, style: props.style },
      (0, _helpers.showChildrenBasedOnType)(props, ['noGutters'], 'container')
    );
  }

  // Treat the row like a shortcut,
  // so inject these props into the new Row.
  var w = props.w,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      noGutters = props.noGutters,
      justifyContent = props.justifyContent;

  var rowProps = {
    w: w, sm: sm, md: md, lg: lg, xl: xl, noGutters: noGutters, justifyContent: justifyContent
  };
  return _react2.default.createElement(
    'div',
    { className: classes, style: props.style },
    _react2.default.createElement(
      _index.Row,
      rowProps,
      (0, _helpers.showChildrenBasedOnType)(props, ['noGutters'], 'container')
    )
  );
};

var widthPt = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

Container.propTypes = {
  fluid: _propTypes2.default.bool,
  fluidFull: _propTypes2.default.bool,
  noGutters: _propTypes2.default.bool,
  debug: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  style: _reactStyleProptype2.default,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  key: _propTypes2.default.number,
  w: widthPt,
  sm: widthPt,
  md: widthPt,
  lg: widthPt,
  xl: widthPt,
  justifyContent: _propTypes2.default.string
};

Container.defaultProps = {
  fluid: false,
  fluidFull: false,
  debug: false,
  noGutters: false,
  className: undefined,
  style: {},
  key: 1,
  w: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  justifyContent: undefined
};

exports.default = Container;