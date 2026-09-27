INSERT INTO categories (id, name)
VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Home & Kitchen');

INSERT INTO products
(id, name, description, price, stock, image_url, category_id)
VALUES
(1, 'Wireless Headphones',
 'Noise-cancelling over-ear headphones with 30hr battery life',
 79.99, 50,
 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
 1),

(2, 'Smart Watch',
 'Fitness tracking smart watch',
 49.99, 30,
 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
 1),

(3, 'Cotton T-Shirt',
 'Comfortable cotton t-shirt',
 19.99, 100,
 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
 2),

(4, 'Coffee Maker',
 'Automatic coffee maker for home',
 59.99, 25,
 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
 3),
 
 (5, 'Cricket Bat',
 'Professional quality cricket bat',
 89.99, 40,
 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400',
 2),

(6, 'Cricket Ball',
 'Durable cricket ball for practice and matches',
 14.99, 80,
 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400',
 2),

(7, 'Premium Ball Pen',
 'Smooth writing ball pen with comfortable grip',
 4.99, 200,
 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400',
 3),

(8, 'Mountain Bicycle',
 'Lightweight mountain bicycle with durable frame',
 299.99, 15,
 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400',
 3),

(9, 'Remote Control Toy Car',
 'Rechargeable remote control racing car',
 34.99, 50,
 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400',
 3),

(10, 'Building Blocks',
 'Creative building block set for kids',
 24.99, 60,
 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400',
 3),

(11, 'Women Casual Dress',
 'Comfortable and stylish casual dress',
 39.99, 70,
 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
 2),

(12, 'Business Laptop',
 'Powerful laptop for office and professional work',
 899.99, 20,
 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
 1),

(13, 'Modern Wall Clock',
 'Elegant modern wall clock for home decoration',
 29.99, 45,
 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400',
 3),

(14, 'Running Shoes',
 'Lightweight running shoes with comfortable sole',
 69.99, 55,
 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
 2),

(15, 'Fitness Smart Watch',
 'Smart watch with heart rate and fitness tracking',
 99.99, 35,
 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400',
 1),

(16, 'Smartphone',
 'Modern smartphone with high resolution display',
 499.99, 30,
 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
 1),

(17, 'Travel Backpack',
 'Water resistant backpack for travel and daily use',
 44.99, 65,
 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
 2),

(18, 'Classic Sunglasses',
 'Stylish UV protection sunglasses',
 29.99, 90,
 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
 2),

(19, 'Mechanical Keyboard',
 'RGB mechanical keyboard for gaming and office work',
 79.99, 40,
 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
 1),

(20, 'Wireless Mouse',
 'Ergonomic wireless mouse with precise tracking',
 24.99, 100,
 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
 1);