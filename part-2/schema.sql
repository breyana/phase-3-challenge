DROP TABLE IF EXISTS grocery_items;
DROP TABLE IF EXISTS shoppers;
DROP TABLE IF EXISTS orders;

CREATE TABLE grocery_items (id INTEGER PRIMARY KEY, name VARCHAR(255), price DECIMAL, section VARCHAR(255));

CREATE TABLE shoppers (id INTEGER PRIMARY KEY, name VARCHAR(255));

CREATE TABLE orders (id INTEGER PRIMARY KEY, order_date DATE, shopper_id INTEGER);

CREATE TABLE ordered_items (order_id INTEGER, grocery_id INTEGER);
