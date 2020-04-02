import React from 'react';
import PaletteListView from './index';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
    const {container} = render(
        <PaletteListView />     
    )
	expect(container).toBeInTheDocument();
});

it('filters properly', async () => {
    const { findByText, findByLabelText, findAllByTestId  } = render(<PaletteListView width={'xl'} />);
    const colorListItems = await findAllByTestId('colorListItem');
    expect(colorListItems.length).toBeGreaterThan(10);
    const filtersEl = await findByText('Filters');
    fireEvent.click(filtersEl)
    const variantToggle = await findByText('A700');
    const colorToggle = await findByLabelText('deep Purple');
    fireEvent.click(variantToggle);
    fireEvent.click(colorToggle);
    fireEvent.click(filtersEl);
    expect(colorListItems.length).toBeGreaterThan(1);
})