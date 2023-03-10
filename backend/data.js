import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'john123@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: '1.5',
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Adidas Slim Shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 140,
      countInStock: 0,
      brand: 'Adidas',
      rating: '1',
      numReviews: 8,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Oxford Slim Shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 100,
      countInStock: 30,
      brand: 'Oxford',
      rating: '4.4',
      numReviews: 7,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 130,
      countInStock: 5,
      brand: 'Adidas',
      rating: '3.9',
      numReviews: 5,
      description: 'high quality product',
    },
    {
      // _id: '5',
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 160,
      countInStock: 10,
      brand: 'Nike',
      rating: '3.7',
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '6',
      name: 'Oxford Slim Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 190,
      countInStock: 10,
      brand: 'Oxford',
      rating: '3.5',
      numReviews: 6,
      description: 'high quality product',
    },
  ],
};

export default data;
