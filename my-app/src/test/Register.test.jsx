import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Register from '../components/Register';
import {BrowserRouter as Router} from 'react-router-dom';

test('Register render',()=>{
    const component=render(<Router><Register /></Router>);
    component.getByText('Email address');
    component.getByText('Password');
    component.getByText('Repeat password');
    component.getByText('Name');
    component.getByText('Surname');
    component.getByText('Login');
    component.getByText('Register');
    component.getByText('Copyright © 2022 Desarrollo Interfaces AGL. All Rights Reserved.');
});