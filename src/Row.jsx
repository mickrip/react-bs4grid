import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './scss/bootstrap-grid.scss';
import { showChildrenBasedOnType } from './helpers';

const evalJustifyContent = justifyContent => (justifyContent ? `justify-content-${justifyContent}` : null);

const evalAlignItems = alignItems => (alignItems ? `align-items-${alignItems}` : false);

const evalAlignSelf = prop => (prop ? `align-self-${prop}` : false);

const Row = (props) => {
  const noGuttersEval = props.noGutters || props.noGuttersParent;
  const classes = classNames(
    'row',
    { 'no-gutters': noGuttersEval },
    evalJustifyContent(props.justifyContent),
    evalAlignItems(props.alignItems),
    evalAlignSelf(props.alignSelf),
    { debug: props.debug },
    props.className,
  );

  return (
    <div className={classes} style={props.style}>
      {showChildrenBasedOnType(props, ['noGutters', 'responsive'])}
    </div>
  );
};

Row.propTypes = {
  noGutters: propTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  responsive: propTypes.bool,
  noGuttersParent: propTypes.bool,
  debug: propTypes.bool,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  justifyContent: propTypes.string,
  className: propTypes.string,
  style: stylePropType,
  // eslint-disable-next-line react/no-unused-prop-types
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

Row.defaultProps = {
  debug: false,
  noGutters: false,
  style: {},
  noGuttersParent: false,
  responsive: true,
  alignSelf: undefined,
  alignItems: undefined,
  justifyContent: undefined,
  className: undefined,
};

export default Row;
