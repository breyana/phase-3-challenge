DROP TABLE IF EXISTS grocery_items CASCADE;
DROP TABLE IF EXISTS shoppers CASCADE;
DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL,
  section VARCHAR(255)
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_date DATE,
  shopper_id INTEGER REFERENCES shoppers
);

CREATE TABLE ordered_items (
  order_id INTEGER REFERENCES orders,
  grocery_id INTEGER REFERENCES grocery_items
);
