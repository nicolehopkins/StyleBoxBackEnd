DROP DATABASE IF EXISTS stylebox;
CREATE DATABASE stylebox;

\c styleBox

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR UNIQUE NOT NULL,
  token VARCHAR UNIQUE NOT NULL,
  shippingAddress VARCHAR,
  billingAddress VARCHAR,
  creditCardInfo VARCHAR
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  stock INT NOT NULL
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
  isPaid BOOLEAN NOT NULL
);

