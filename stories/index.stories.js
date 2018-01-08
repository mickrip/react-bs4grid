import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoWidths, JustifyContent, Fluid, NoGutter, Normal, TwoCols, VertAlign, VertAlignCols,
  UseCasesNavBar, UseCasesMiddleBox, Emptys,
} from './Components.jsx';



storiesOf('Container', module)
  .add('1 Col', Normal)
  .add('2 cols', TwoCols)
  .add('Justify Content', JustifyContent)
  .add('No Gutters', NoGutter)
  .add('Fluid', Fluid)
  .add('Auto Widths', AutoWidths)
  .add('Vertical Align Row', VertAlign)
  .add('Vertical Align Col', VertAlignCols)
  .add('Use Case - Navbar', UseCasesNavBar)
  .add('Use Case - Middle', UseCasesMiddleBox)
  .add('Empty Components', Emptys);
