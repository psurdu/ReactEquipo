import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Perfil from '../components/Perfil';

/**
 * Test para saber si se renderiza bien el perfil por defecto
 */
 test('perfil render por defecto',()=>{
    const component=render(<Perfil />);
    component.getByText('Tienes que iniciar sesión o regístrate para editar el perfil');
});