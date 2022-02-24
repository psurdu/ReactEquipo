import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';
import {BrowserRouter as Router} from 'react-router-dom';

test('NavigationBar render',()=>{
    const component=render(<Router><NavigationBar /></Router>);
    component.getByText('Home');
    component.getByText('Videos');
    component.getByText('Perfil');
});