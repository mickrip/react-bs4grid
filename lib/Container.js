'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./scss/bootstrap-grid.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('./helpers');

require('./css.scss');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)({ container: !this.props.fluid && !this.props.fluidFull }, { 'container-fluid': this.props.fluid || this.props.fluidFull }, { 'rbs4-container-fluid-full': this.props.fluidFull || this.props.fluid && this.props.noGutters }, this.props.className, { 'rbs4-debug': this.props.debug });

      /* Check if first child is a <Row>. If not, wrap it in
             a <Row> and pass down some props. */
      if ((0, _helpers.firstChildIsOfType)(this.props.children, 'Row')) {
        return _react2.default.createElement(
          'div',
          { className: classes, style: this.props.style },
          (0, _helpers.showChildrenBasedOnType)(this.props, ['noGutters'], 'container')
        );
      }
      var _props = this.props,
          w = _props.w,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xl = _props.xl,
          noGutters = _props.noGutters,
          justifyContent = _props.justifyContent;

      var rowProps = {
        w: w, sm: sm, md: md, lg: lg, xl: xl, noGutters: noGutters, justifyContent: justifyContent
      };
      return _react2.default.createElement(
        'div',
        { className: classes, style: this.props.style },
        _react2.default.createElement(
          _index.Row,
          rowProps,
          (0, _helpers.showChildrenBasedOnType)(this.props, ['noGutters'], 'container')
        )
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;


Container.propTypes = {
  fluid: _propTypes2.default.bool,
  noGutters: _propTypes2.default.bool,
  debug: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

Container.defaultProps = {
  fluid: false,
  fluidFull: false,
  debug: false,
  noGutters: false
};