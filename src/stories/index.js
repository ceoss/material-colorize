import React from 'react';

import { storiesOf } from '@storybook/react';
import ColorFormatsDisplay from '../components/ColorFormatsDisplay';
import { action } from '@storybook/addon-actions';

const color = '#f44336';

storiesOf('Color Format Display', module)
  .add('with defaults', () => (
    <ColorFormatsDisplay color={color}/>
  ))
  .add('with copy button', () => (
    <ColorFormatsDisplay color={color} allowCopy={true}/>
  ))
  // ?
  .add('with icon appended', () => (
    <ColorFormatsDisplay color={color} allowCopy={true}/>
  ))
