import React from "react";

interface ProductProps {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, imageUrl, name, description, price }) => {
  return (
    <div key={id} className="product-card">
      <img
        src={imageUrl}
        alt={name}
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price-button">
          <span className="product-price">${price}</span>
          <button
            className="snipcart-add-item add-to-cart-button"
            data-item-id={id}
            data-item-image={imageUrl}
            data-item-name={name}
            data-item-url="https://43ab-95-168-118-31.ngrok-free.app/api/products"
            data-item-price={price}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;