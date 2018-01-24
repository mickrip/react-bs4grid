import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './scss/bootstrap-grid.scss';
import './css.scss';

import { showChildrenBasedOnType } from './helpers';


const Container = (props) => {
  const classes = classNames(
    { container: !props.fluid && !props.fluidFull },
    { 'container-fluid': props.fluid || props.fluidFull },
    { 'rbs4-container-fluid-full': props.fluidFull || (props.fluid && props.noGutters) },
    props.className,
    { 'rbs4-debug': props.debug },
  );

  return (
    <div className={classes} style={props.style}>
      {showChildrenBasedOnType(props, ['noGutters'], 'container')}
    </div>
  );
};

Container.propTypes = {
  fluid: propTypes.bool,
  fluidFull: propTypes.bool,
  noGutters: propTypes.bool,
  debug: propTypes.bool,
  className: propTypes.string,
  style: stylePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

Container.defaultProps = {
  fluid: false,
  fluidFull: false,
  debug: false,
  noGutters: false,
  className: undefined,
  children: undefined,
  style: {},
};

export default Container;
