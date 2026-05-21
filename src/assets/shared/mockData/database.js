// src/shared/mockData/database.js

export const MOCK_RESTAURANTS = [
  {
    id: 'R001',
    name: 'Gourmet Burger House',
    category: 'Americana',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    status: 'open'
  },
  {
    id: 'R002',
    name: 'Sushi Zen Premium',
    category: 'Japonesa',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    status: 'open'
  }
];

export const MOCK_PRODUCTS = [
  {
    id: 'P001',
    restaurantId: 'R001',
    name: 'Truffle Bacon Burger',
    description: 'Carne Angus 200g, tocino ahumado, queso suizo y mayonesa de trufa.',
    price: 185.00,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    stock: 45
  }
];

// Estos datos pueden ser consumidos tanto por la vista del cliente como por el dashboard del restaurante.