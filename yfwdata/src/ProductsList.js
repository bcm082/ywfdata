import React, { useState, useEffect } from 'react';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("There was an error fetching the products: ", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Products</h2>
      <div>
        {products.map((product) => (
          <div key={product._id} className="mb-4">
            <h3 className="text-xl">{product.name}</h3>
            <p>SKU: {product.sku}</p>
            <p>Tags: {product.tags.join(', ')}</p>
            <p>Year Listed: {product.yearListed}</p>
            <div>
              <img src={product.mainImage} alt={product.name} style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
              <a href={product.imageLink} target="_blank" rel="noopener noreferrer">Image Link</a>
            </div>
            <div>
              <a href={product.videoLink} target="_blank" rel="noopener noreferrer">Video Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;

