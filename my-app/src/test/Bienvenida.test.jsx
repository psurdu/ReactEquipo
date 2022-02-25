import React from 'react';
import '@testing-library/react'
import { render, screen } from '@testing-library/react';
import Bienvenida from '../components/Bienvenida.jsx'

test('Bienvenida render', () => {
    render(<Bienvenida />);
    screen.debug();
    
    const texto2 = screen.getByText("Estamos encantados de tenerte con nosotros, esperamos que disfrutes del contenido que podemos ofrecerte.")
    const texto3 = screen.getByText('Para comenzar, pulsa en "Vídeos" en la barra de navegación.')
    const texto4 = screen.getByText("La aventura va a comenzar.")

    expect(texto2).toBeInTheDocument();
    expect(texto3).toBeInTheDocument();
    expect(texto4).toBeInTheDocument();
})