'use strict';

import Button from '../src/components/button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button>Load Data</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});





