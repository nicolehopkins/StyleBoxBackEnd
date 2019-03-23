DROP DATABASE IF EXISTS styleBox;
CREATE DATABASE styleBox;

\c styleBox;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR UNIQUE NOT NULL,
  token VARCHAR UNIQUE NOT NULL,
  shippingAddress VARCHAR,
  billingAddress VARCHAR,
  creditCardNumber VARCHAR
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  quantity VARCHAR NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id) NOT NULL,
  product_id INT REFERENCES products(id) NOT NULL,
  dateOrdered VARCHAR NOT NULL,
  dateShipped VARCHAR
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  date VARCHAR NOT NULL,
  customer_id INT REFERENCES customers(id) NOT NULL,
  order_id INT REFERENCES orders(id) NOT NULL,
  billingAddress VARCHAR NOT NULL, 
  shippingAddress VARCHAR NOT NULL,
  paymentType VARCHAR NOT NULL
);