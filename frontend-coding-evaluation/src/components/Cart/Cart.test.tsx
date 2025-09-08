import { render, screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';

import Cart from './Cart';

describe('Cart Component', () => {
  const mockItems = [
    {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      description: 'Test Description',
      category: 'Test Category',
      image: 'test-image.jpg',
      rating: { rate: 4.5, count: 100 },
    },
  ];

  it('renders cart with items', () => {
    render(<Cart items={mockItems} total={99.99} />);

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99', { selector: '.text-sm.text-gray-500' })).toBeInTheDocument();
  });

  it('displays correct total', () => {
    render(<Cart items={mockItems} total={99.99} />);

    expect(
      screen.getByText('$99.99', {
        selector: '.text-lg.font-medium.text-gray-900',
      }),
    ).toBeInTheDocument();
  });

  it('renders empty cart message when no items', () => {
    render(<Cart items={[]} total={0} />);

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(
      screen.getByText('$0.00', {
        selector: '.text-lg.font-medium.text-gray-900',
      }),
    ).toBeInTheDocument();
  });
});
