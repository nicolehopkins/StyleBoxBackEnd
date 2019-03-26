DROP DATABASE IF EXISTS stylebox;
CREATE DATABASE stylebox;

\c styleBox

CREATE TABLE customers (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR UNIQUE NOT NULL,
  "token" VARCHAR UNIQUE NOT NULL,
  "shipping_address" VARCHAR,
  "billing_address" VARCHAR,
  "credit_card_number" INT
);

CREATE TABLE products (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "description" VARCHAR NOT NULL,
  "price" DECIMAL(10,2) NOT NULL,
  "stock" INT NOT NULL
);

CREATE TABLE orders (
  "id" SERIAL PRIMARY KEY,
  "customer_id" INT REFERENCES customers(id) NOT NULL,
  "product_id" INT REFERENCES products(id) NOT NULL,
  "amount" DECIMAL(10,2) NOT NULL,
  "date_ordered" DATE NOT NULL,
  "date_shipped" DATE
);

CREATE TABLE payments (
  "id" SERIAL PRIMARY KEY,
  "date" DATE NOT NULL,
  "customer_id" INT REFERENCES customers(id) NOT NULL,
  "order_id" INT REFERENCES orders(id) NOT NULL,
  "paid" BOOLEAN NOT NULL
);