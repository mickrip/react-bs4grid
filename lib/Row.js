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

require('./scss/bootstrap-grid.scss');

var _helpers = require('./helpers');

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _helpers2 = require('../lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evalJustifyContent = function evalJustifyContent(props) {
  return props.justifyContent ? 'justify-content-' + props.justifyContent : null;
};

var evalAlignItems = function evalAlignItems(props) {
  return props.alignItems ? 'align-items-' + props.alignItems : false;
};

var evalAlignSelf = function evalAlignSelf(prop) {
  return prop ? 'align-self-' + prop : false;
};

var Row = function Row(props) {
  var noGuttersEval = props.noGutters || props.noGuttersParent;
  var classes = (0, _classnames2.default)('row', { 'no-gutters': noGuttersEval }, evalJustifyContent(props), evalAlignItems(props), evalAlignSelf(props.alignSelf), { debug: props.debug }, props.className);

  /* Check if first child is a <Col>. If not, wrap it in
   a <Col> and pass down some props. */
  if ((0, _helpers2.firstChildIsOfType)(props.children, 'Col')) {
    return _react2.default.createElement(
      'div',
      { key: props.key, className: classes, style: props.style },
      (0, _helpers.showChildrenBasedOnType)(props, ['noGutters', 'responsive'])
    );
  }
  var w = props.w,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl;

  var colProps = {
    w: w, sm: sm, md: md, lg: lg, xl: xl
  };
  return _react2.default.createElement(
    'div',
    { key: props.key, className: classes, style: props.style },
    _react2.default.createElement(
      _Col2.default,
      colProps,
      props.children
    )
  );
};

var widthPt = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

Row.propTypes = {
  noGutters: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  noGuttersParent: _propTypes2.default.bool,
  debug: _propTypes2.default.bool,
  alignSelf: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.style,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  key: _propTypes2.default.number,
  w: widthPt,
  sm: widthPt,
  md: widthPt,
  lg: widthPt,
  xl: widthPt
};

Row.defaultProps = {
  debug: false,
  noGutters: false,
  noGuttersParent: false,
  responsive: true,
  alignSelf: undefined,
  className: undefined,
  style: {},
  key: 1,
  w: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined

};

exports.default = Row;