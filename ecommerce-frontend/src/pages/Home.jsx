import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeSlide, setActiveSlide] = useState(0)

  const promotions = [
    { kicker: 'THE SHOPEASE EDIT', title: <>Good things.<br /><span>Great finds.</span></>, description: 'Discover thoughtful picks for your everyday, all in one happy place.', action: 'Explore the collection', eyebrow: 'THE EVERYDAY EDIT', feature: 'Find your favorite', sticker: <>GOOD<br />STUFF</>, note: 'A little something for every day' },
    { kicker: 'A LITTLE INSPIRATION', title: <>Find your<br /><span>next favorite.</span></>, description: 'Take a look around. Your next everyday essential could be right here.', action: "See what's in store", eyebrow: 'CURATED FOR YOU', feature: 'A fresh new find', sticker: <>FRESH<br />FINDS</>, note: 'New things to discover' },
    { kicker: 'MAKE IT YOURS', title: <>A good day<br /><span>starts here.</span></>, description: 'Browse the collection and find something that feels just right.', action: 'Shop all picks', eyebrow: 'YOUR NEXT PICK', feature: 'Made for your day', sticker: <>JUST<br />FOR YOU</>, note: 'Find your kind of good' },
  ]
  const activePromotion = promotions[activeSlide]
  const featuredProduct = products.length ? products[activeSlide % products.length] : null
  const changeSlide = (direction) => setActiveSlide((current) => (current + direction + promotions.length) % promotions.length)

  useEffect(() => {
    api.get('/categories').then((res) => setCategories(res.data)).catch(() => {})
  }, [])

  useEffect(() => {
    setLoading(true)
    setError('')
    const params = {}
    if (selectedCategory) params.categoryId = selectedCategory
    if (search) params.search = search

    api.get('/products', { params })
      .then((res) => setProducts(res.data))
      .catch(() => setError('Failed to load products. Is the backend running?'))
      .finally(() => setLoading(false))
  }, [selectedCategory, search])

  return (
    <div className="container">
      <section className={`store-hero slide-${activeSlide}`} aria-roledescription="carousel" aria-label="ShopEase promotions">
        <div className="hero-copy" key={`copy-${activeSlide}`} aria-live="polite">
          <span className="hero-kicker"><span className="hero-kicker-dot" /> {activePromotion.kicker}</span>
          <h1>{activePromotion.title}</h1>
          <p>{activePromotion.description}</p>
          <a className="hero-cta" href="#shop-products">{activePromotion.action} <span aria-hidden="true">&#8599;</span></a>
          <div className="hero-note"><span className="hero-note-stars">&#10035; &#10035; &#10035;</span> {activePromotion.note}</div>
        </div>
        <div className="hero-art" key={`art-${activeSlide}`} aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-spark spark-one">&#10022;</div><div className="hero-spark spark-two">&#10023;</div>
          <div className="hero-feature-card">
            {featuredProduct?.imageUrl ? <img src={featuredProduct.imageUrl} alt="" /> : <div className="hero-placeholder">&#10035;</div>}
            <div className="hero-feature-label"><span>{activePromotion.eyebrow}</span><strong>{activePromotion.feature}</strong></div>
          </div>
          <div className="hero-sticker"><span>{activePromotion.sticker}</span><b>&#10035;</b></div>
        </div>
        <div className="hero-controls" aria-label="Promotion slide controls">
          <button className="hero-arrow" type="button" aria-label="Previous promotion" onClick={() => changeSlide(-1)}>&#8249;</button>
          <div className="hero-dots" role="group" aria-label="Choose promotion">
            {promotions.map((promotion, index) => <button key={promotion.kicker} type="button" className={`hero-dot ${index === activeSlide ? 'active' : ''}`} aria-label={`Show promotion ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} onClick={() => setActiveSlide(index)} />)}
          </div>
          <span className="hero-index"><strong>{String(activeSlide + 1).padStart(2, '0')}</strong><i />03</span>
          <button className="hero-arrow" type="button" aria-label="Next promotion" onClick={() => changeSlide(1)}>&#8250;</button>
        </div>
      </section>

      <section className="promo-strip" aria-label="Store highlights">
        <article className="promo-item"><span className="promo-icon promo-icon-lime">✳</span><div><strong>Made for your everyday</strong><small>Little upgrades, big joy</small></div></article>
        <article className="promo-item"><span className="promo-icon promo-icon-peach">↗</span><div><strong>Discover something new</strong><small>Browse the latest collection</small></div></article>
        <article className="promo-item"><span className="promo-icon promo-icon-lilac">♡</span><div><strong>Shopping made simple</strong><small>Find it, love it, add to cart</small></div></article>
      </section>

      <section id="shop-products" className="shop-section">
        <div className="shop-heading"><div><span className="section-eyebrow">A GOOD PLACE TO START</span><h2>Explore the collection<span className="heading-period">.</span></h2></div><span className="shop-count">{products.length} {products.length === 1 ? 'find' : 'finds'} to explore</span></div>
        {categories.length > 0 && (
          <div className="category-browser">
            <span className="category-browser-label">Shop by category</span>
            <div className="category-chips" role="group" aria-label="Filter products by category">
              <button className={`category-chip ${selectedCategory === '' ? 'active' : ''}`} onClick={() => setSelectedCategory('')}>Everything</button>
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`category-chip category-chip-${index % 4} ${selectedCategory === String(category.id) ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(String(category.id))}
                >
                  <span aria-hidden="true">{['✳', '◈', '✦', '♡'][index % 4]}</span>{category.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        </div>

      {loading && <p className="shop-message">Finding the good stuff<span className="loading-dots">...</span></p>}
      {error && <p className="error">{error}</p>}

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {!loading && !error && products.length === 0 && <p>No products found.</p>}
      </section>
    </div>
  )
}
