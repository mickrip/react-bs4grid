import React from 'react';
import './scss/bootstrap-grid.scss';
import classNames from 'classnames';
import propTypes from 'prop-types';


const evalAlignSelf = prop => (prop ? `align-self-${prop}` : false);

const evalWidths = props => ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => {
  const propValue = props[size];
  return propValue ? `col-${size}-${propValue}` : false;
});

const evalAlignItems = ({ alignItems }) => (alignItems ? `rbs4-flex align-items-${alignItems}` : undefined);

const evalPush = ({ push }) => (push ? `rbs4-push-${push}` : undefined);

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
    evalAlignItems(props),
    evalAutos(props),
    evalPush(props),
    props.className,
  );


  return (
    <div className={classes} key={props.key} style={props.style}>
      {props.children}
    </div>
  );
};


Col.propTypes = {
  noGutter: propTypes.bool,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  className: propTypes.string,
};

Col.defaultProps = {
  debug: false,
  responsiveParent: true,
};

export default Col;
