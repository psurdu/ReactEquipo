import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Videos from '../components/Videos';

test('video render',()=>{
    const component=render(<Videos />);
    component.getByText('Canal');
    component.getByText('Buscar');
});