import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './scss/bootstrap-grid.scss';

const evalAlignSelf = prop => (prop ? `align-self-${prop}` : false);

const evalWidths = props => ['sm', 'md', 'lg', 'xl'].map((size) => {
  const propValue = props[size];
  return propValue ? `col-${size}-${propValue}` : false;
});

const evalAlignItems = alignItems => (alignItems ? `rbs4-flex align-items-${alignItems}` : undefined);

const evalPush = push => (push ? `rbs4-push-${push}` : undefined);

const evalAutos = (props) => {
  const p = props.w || props.width;
  return (p !== undefined) ? `col-${p}` : false;
};

const Col = (props) => {
  const classes = classNames(
    props.responsiveParent === false || props.w ? 'col' : false,
    props.responsiveParent === true && !props.w ? 'col-sm' : false,
    { 'rbs4-no-gutter': props.noGutter },
    evalAlignSelf(props.alignSelf),
    evalWidths(props),
    evalAlignItems(props.alignItems),
    evalAutos(props),
    evalPush(props.push),
    props.className,
  );


  return (
    <div className={classes} key={props.key} style={props.style}>
      {props.children}
    </div>
  );
};

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
  key: propTypes.number,
  className: propTypes.string,
  responsiveParent: propTypes.bool,
  w: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  sm: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  md: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  lg: widthPt,
  // eslint-disable-next-line react/no-unused-prop-types
  xl: widthPt,
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
  xl: undefined,
};

export default Col;
