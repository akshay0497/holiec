import React, { useState } from 'react';
import { CartItem, Product } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Organic Gulal Pack",
      description: "",
      price: 100,
      image: "./src/assets/gulal.jpg"
    },
    {
      id: 2,
      name: "Premium Pichkari Set",
      description: "",
      price: 100,
      image:"./src/assets/6215988.jpeg"   
     },
    {
      id: 3,
      name: "Festive Kurta Set",
      description: "",
      price: 100,
      image: "./src/assets/tshirtimage.jpeg"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Aditya Kumar Dwivedi ",
      image: "https://images.pexels.com/photos/2753381/pexels-photo-2753381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review: "uytretyuiuytre ertyuiuytrew rwetyuiuytrertyu iuytrertyuy"
    },
    {
      id: 2,
      name: "Aditya Kumar Dwivedi ",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      review: "loem ertyuiouytretyui drthuiouytrerrty oiuytrewrtyuiuytre oiuytrertyu"
    }
  ];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      <Navigation cartItems={cartItems} />
      <Hero />
      <Products products={products} addToCart={addToCart} />
      <Testimonials testimonials={testimonials}/>
      <Footer />
    </div>
  );
}

export default App;