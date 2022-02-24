import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Login from '../components/Login';
import {BrowserRouter as Router} from 'react-router-dom';

test('Login render',()=>{
    const component=render(<Router><Login /></Router>);
    component.getByText('Email address');
    component.getByText('Password');
    component.getByText('Login');
    component.getByText('Register');
    component.getByText('Copyright © 2022 Desarrollo Interfaces AGL. All Rights Reserved.');
});