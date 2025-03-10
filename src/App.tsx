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
      image: "https://t4.ftcdn.net/jpg/04/17/51/63/360_F_417516327_VUdUDXbn3VP6zxdgn6TTQbnKWAEZ1qhN.jpg"
    },
    {
      id: 2,
      name: "Premium Pichkari Set",
      description: "",
      price: 100,
      image: "https://cdn3d.iconscout.com/3d/premium/thumb/holi-pichkari-3d-icon-download-in-png-blend-fbx-gltf-file-formats--day-color-injection-play-pack-festival-days-icons-6215988.png?f=webp"
    },
    {
      id: 3,
      name: "Festive Kurta Set",
      description: "",
      price: 100,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/c/8/xl-happy-holi-xl-tee-mafia-original-imagn25zjh8rhyjt.jpeg?q=70"
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