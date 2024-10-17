import React from 'react';
import './mobileItems.css';



const MobileItems = () => {
  const items = [
    {
      id: 1,
      name: 'Samsung ',
      price: '$299',
      image: 'https://www.thebignano.com/wp-content/uploads/2018/10/81GL-gs9GYL._SL1500_.jpg',
    },
    {
      id: 2,
      name: 'iphone 16 promax',
      price: '$1399',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/device/170479990115-pro-max-specs-1-800x800_one_to_one.jpg?VersionId=CoYKyqVzhGqPJ1BEe26Rxu1hskdjmhcS',
    },
    {
      id: 3,
      name: 'GooglePlus',
      price: '$1499',
      image: 'https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/285681e8-6b96-4405-be2d-72db996fa1b3-1_dc6ab041-ed58-46fc-972d-68c3fc925a59.jpg',
    },
    {
      id: 4,
      name: 'Sony',
      price: '$599',
      image: 'https://i.ebayimg.com/images/g/W5EAAOSwaIdmWS5-/s-l1600.webp',
    },
  ];

  return (
    <div className="mobile-items-container">
      <h1>Welcome to My Shop</h1>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileItems;
