import React from 'react';

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
 * Basically enhances {this.props.children}
 * Accepts props object and an array of prop names to pass down to all children elements.
 * Copes with React Elements, or an array of React Elements, or a String.
 *
 * @param componentProps
 * @param propsToPassDown
 * @returns {*}
 */

export const showChildrenBasedOnType = (componentProps, propsToPassDown = []) => {
  if (!componentProps.children) return <span />;

  const passDownProps = (key = 1) => {
    const o = { key };
    propsToPassDown.forEach((val) => {
      o[`${val}Parent`] = componentProps[val];
    });
    return o;
  };

  const isMappable = Object.prototype.toString.call(componentProps.children) === '[object Array]';
  const isString = Object.prototype.toString.call(componentProps.children) === '[object String]';


  // return if it's just a string
  if (isString) return componentProps.children;

  const getElement = (elem, thisProps) => (shouldThisComponentBeInjectedWithProps(elem)
    ? React.cloneElement(elem, thisProps)
    : elem);


  return !isMappable ?
    getElement(componentProps.children, passDownProps(1))
    : componentProps.children.map((child, key) => getElement(child, passDownProps(key)));
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
