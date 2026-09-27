import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/currency'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
      </Link>
      <p className="price">{formatCurrency(product.price)}</p>
      <p className="stock">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
      <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
    </div>
  )
}
