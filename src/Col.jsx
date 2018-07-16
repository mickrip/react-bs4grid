import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import pickBy from 'lodash/pickBy';
import pick from 'lodash/pick';
import identity from 'lodash/identity';
import reduce from 'lodash/reduce';
import './scss/bootstrap-grid.scss';

const ALLOWED_BREAKPOINTS = ['sm', 'md', 'lg', 'xl'];

const evalAlignSelf = prop => (prop ? `align-self-${prop}` : false);

const evalAlignItems = alignItems => (alignItems ? `rbs4-flex align-items-${alignItems}` : undefined);

const evalPush = push => (push ? `rbs4-push-${push}` : undefined);

const evalAutos = ({ w }) => w && `col-${w}`;

const evalWidth = (breakpointProps) => 
  reduce(breakpointProps, (r, v, k) => v.size ? [...r, `col-${k}-${v.size}`] : r, []);

const evalOffset = (breakpointProps) => 
reduce(breakpointProps, (r, v, k) => v.offset ? [...r, `offset-${k}-${v.offset}`] : r, []);

const evalOrder = (breakpointProps) => 
  reduce(breakpointProps, (r, v, k) => v.order ? [...r, `order-${k}-${v.order}`] : r, []);

const Col = (props) => {
  const breakpointProps = pickBy(pick(props, ALLOWED_BREAKPOINTS), identity);

  const classes = classNames(
    props.responsiveParent === false || props.w ? 'col' : false,
    props.responsiveParent === true && !props.w ? 'col-sm' : false,
    {'rbs4-no-gutter': props.noGutter},
    evalAlignSelf(props.alignSelf),
    evalWidth(breakpointProps),
    evalOffset(breakpointProps),
    evalOrder(breakpointProps),
    evalAlignItems(props.alignItems),
    evalAutos(props),
    evalPush(props.push),
    props.className,
  );

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  );
};

const widthBreakpointObj = propTypes.shape([
  propTypes.shape({
    size: propTypes.oneOfType([propTypes.string, propTypes.number]),
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
    order: propTypes.oneOfType([propTypes.string, propTypes.number]),
  })
]);

const widthPt = propTypes.oneOfType([
  propTypes.string,
  propTypes.number,
]);

Col.propTypes = {
  noGutter: propTypes.bool,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  push: propTypes.string,
  style: stylePropType,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  responsiveParent: propTypes.bool,
  w: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  sm: widthBreakpointObj,
  // eslint-disable-next-line react/no-unused-prop-types
  md: widthBreakpointObj,
  // eslint-disable-next-line react/no-unused-prop-types
  lg: widthBreakpointObj,
  // eslint-disable-next-line react/no-unused-prop-types
  xl: widthBreakpointObj,
};

Col.defaultProps = {
  noGutter: false,
  alignSelf: undefined,
  alignItems: undefined,
  push: undefined,
  className: undefined,
  responsiveParent: true,
  style: {},
  w: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offsetSm: undefined,
  offsetMd: undefined,
  offsetLg: undefined,
  offsetXl: undefined,
};


export default Col;
