import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './calendar';

test('renders learn react link', () => {
    render(<Calendar />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});