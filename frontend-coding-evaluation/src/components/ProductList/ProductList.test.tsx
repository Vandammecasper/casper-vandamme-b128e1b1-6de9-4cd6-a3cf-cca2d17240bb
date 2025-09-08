import { render, screen } from '@testing-library/react';

import { describe, it, expect, vi } from 'vitest';

import ProductList from '.';

describe('ProductList Component', () => {
  const mockProducts = [
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

  it('renders products correctly', () => {
    const mockAddToCart = vi.fn();
    render(<ProductList products={mockProducts} onAddToCart={mockAddToCart} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('calls onAddToCart when Add to Cart button is clicked', async () => {});

  it('renders empty state when no products', () => {});
});
