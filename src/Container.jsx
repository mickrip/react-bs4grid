import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './scss/bootstrap-grid.scss';
import './css.scss';

import { showChildrenBasedOnType, firstChildIsOfType } from './helpers';
import { Row } from './index';

const Container = (props) => {
  const classes = classNames(
    { container: !props.fluid && !props.fluidFull },
    { 'container-fluid': props.fluid || props.fluidFull },
    { 'rbs4-container-fluid-full': props.fluidFull || (props.fluid && props.noGutters) },
    props.className,
    { 'rbs4-debug': props.debug },
  );

  /* Check if first child is a <Row>. If not, wrap it in
         a <Row> and pass down some props. */
  if (firstChildIsOfType(props.children, 'Row')) {
    return (
      <div className={classes} style={props.style}>
        {showChildrenBasedOnType(props, ['noGutters'], 'container')}
      </div>
    );
  }

  // Treat the row like a shortcut,
  // so inject these props into the new Row.
  const {
    w, sm, md, lg, xl, noGutters, justifyContent,
  } = props;
  const rowProps = {
    w, sm, md, lg, xl, noGutters, justifyContent,
  };
  return (
    <div className={classes} style={props.style}>
      <Row {...rowProps}>
        {showChildrenBasedOnType(props, ['noGutters'], 'container')}

      </Row>
    </div>
  );
};

const widthPt = propTypes.oneOfType([
  propTypes.string,
  propTypes.number,
]);


Container.propTypes = {
  fluid: propTypes.bool,
  fluidFull: propTypes.bool,
  noGutters: propTypes.bool,
  debug: propTypes.bool,
  className: propTypes.string,
  style: stylePropType,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
  key: propTypes.number,
  w: widthPt,
  sm: widthPt,
  md: widthPt,
  lg: widthPt,
  xl: widthPt,
  justifyContent: propTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  privateName: propTypes.string,
};

Container.defaultProps = {
  fluid: false,
  fluidFull: false,
  debug: false,
  noGutters: false,
  className: undefined,
  children: undefined,
  style: {},
  key: 1,
  w: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  justifyContent: undefined,
  privateName: 'Container',
};

export default Container;
