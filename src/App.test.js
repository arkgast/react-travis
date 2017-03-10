import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';


test('App component', () => {
  const component = renderer.create(<App user='arkgast' />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
