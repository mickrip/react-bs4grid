import React from 'react';
import './scss/bootstrap-grid.scss';
import classNames from 'classnames';
import propTypes from 'prop-types';

import { showChildrenBasedOnType, firstChildIsOfType } from './helpers';
import './css.scss';
import { Row, Col } from './index';


export default class Container extends React.Component {
  render() {
    const classes = classNames(
      { container: !this.props.fluid && !this.props.fluidFull },
      { 'container-fluid': this.props.fluid || this.props.fluidFull },
      { 'rbs4-container-fluid-full': this.props.fluidFull || (this.props.fluid && this.props.noGutters) },
      this.props.className,
      { 'rbs4-debug': this.props.debug },
    );

    /* Check if first child is a <Row>. If not, wrap it in
           a <Row> and pass down some props. */
    if (firstChildIsOfType(this.props.children, 'Row')) {
      return (
        <div className={classes} style={this.props.style}>
          {showChildrenBasedOnType(this.props, ['noGutters'], 'container')}
        </div>
      );
    }
    const {
      w, sm, md, lg, xl, noGutters, justifyContent,
    } = this.props;
    const rowProps = {
      w, sm, md, lg, xl, noGutters, justifyContent,
    };
    return (
      <div className={classes} style={this.props.style}>
        <Row {...rowProps}>
          {showChildrenBasedOnType(this.props, ['noGutters'], 'container')}

        </Row>
      </div>
    );
  }
}

Container.propTypes = {
  fluid: propTypes.bool,
  noGutters: propTypes.bool,
  debug: propTypes.bool,
  className: propTypes.string,
};

Container.defaultProps = {
  fluid: false,
  fluidFull: false,
  debug: false,
  noGutters: false,
};
