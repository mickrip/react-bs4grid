import React from 'react';

/**
 * Basically enhances {this.props.children}
 * Accepts props object and an array of prop names to pass down to all children elements.
 * Copes with React Elements, or an array of React Elements, or a String.
 *
 * @param props
 * @param propsToPassDown
 * @returns {*}
 */

export const showChildrenBasedOnType = (props, propsToPassDown = []) => {
  if (!props.children) return <span />;

  const passDownProps = (key = 1) => {
    const o = { key };
    propsToPassDown.forEach((val) => {
      o[`${val}Parent`] = props[val];
    });
    return o;
  };

  const isMappable = Object.prototype.toString.call(props.children) === '[object Array]';
  const isString = Object.prototype.toString.call(props.children) === '[object String]';


  // return if it's just a string
  if (isString) return props.children;

  const getElement = (elem, props) => (shouldThisComponentBeInjectedWithProps(elem) ? React.cloneElement(elem, props) : elem);


  return !isMappable ?
    getElement(props.children, passDownProps(1))
    : props.children.map((child, key) => getElement(child, passDownProps(key)));
};


/**
 *
 * Determines if the component can except arbitrary props.
 *
 * @param component
 * @returns {boolean}
 */

export const shouldThisComponentBeInjectedWithProps = (component) => {
  if (component.type === undefined) return false;
  return component.type.prototype;
};


/**
 * Looks at the children and ensures first child is "typeToCheck".
 * Used to ensure that Container has Row as a child, and Row has a Col.
 *
 * @param children
 * @param typeToCheck
 * @returns {boolean}
 */

export const firstChildIsOfType = (children, typeToCheck) => {
  const checkElement = Object.prototype.toString.call(children) === '[object Array]' ? children[0] : children;
  const isColElement = (elem) => {
    if (elem.type) {
      return elem.type.name === typeToCheck;
    }
    return false;
  };
  return isColElement(checkElement);
};
