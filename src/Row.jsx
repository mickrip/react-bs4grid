import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import './scss/bootstrap-grid.scss';
import { showChildrenBasedOnType } from './helpers';
import Col from './Col';
import { firstChildIsOfType } from '../lib/helpers';

const evalJustifyContent = props => (props.justifyContent ? `justify-content-${props.justifyContent}` : null);

const evalAlignItems = props => (props.alignItems ? `align-items-${props.alignItems}` : false);

const evalAlignSelf = prop => (prop ? `align-self-${prop}` : false);

const Row = (props) => {
  const noGuttersEval = props.noGutters || props.noGuttersParent;
  const classes = classNames(
    'row',
    { 'no-gutters': noGuttersEval },
    evalJustifyContent(props),
    evalAlignItems(props),
    evalAlignSelf(props.alignSelf),
    { debug: props.debug },
    props.className,
  );


  /* Check if first child is a <Col>. If not, wrap it in
   a <Col> and pass down some props. */
  if (firstChildIsOfType(props.children, 'Col')) {
    return (
      <div key={props.key} className={classes} style={props.style}>
        {showChildrenBasedOnType(props, ['noGutters', 'responsive'])}
      </div>
    );
  }
  const {
    w, sm, md, lg, xl,
  } = props;
  const colProps = {
    w, sm, md, lg, xl,
  };
  return (
    <div key={props.key} className={classes} style={props.style}>
      <Col {...colProps}>
        {props.children}
      </Col>
    </div>

  );
};


const widthPt = propTypes.oneOfType([
  propTypes.string,
  propTypes.number,
]);

Row.propTypes = {
  noGutters: propTypes.bool,
  responsive: propTypes.bool,
  noGuttersParent: propTypes.bool,
  debug: propTypes.bool,
  alignSelf: propTypes.string,
  className: propTypes.string,
  style: propTypes.style,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  key: propTypes.number,
  w: widthPt,
  sm: widthPt,
  md: widthPt,
  lg: widthPt,
  xl: widthPt,
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
  xl: undefined,

};

export default Row;
