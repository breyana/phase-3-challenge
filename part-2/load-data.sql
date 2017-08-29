COPY grocery_items(name, price, section) FROM '/Users/breyana/Documents/Code/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers(name) VALUES ('Bobby McGee');
INSERT INTO shoppers(name) VALUES ('Betty Lou');
INSERT INTO shoppers(name) VALUES ('Georgina Gregory');
INSERT INTO shoppers(name) VALUES ('Yenni Yolanda');
INSERT INTO shoppers(name) VALUES ('Peter Poland');

INSERT INTO orders(order_date, shopper_id) VALUES ('2017-03-04', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-06-19', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-03-04', 4);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-01-04', 2);
INSERT INTO orders(order_date, shopper_id) VALUES ('2017-02-22', 1);
INSERT INTO orders(order_date, shopper_id) VALUES ('2016-10-23', 3);
INSERT INTO orders(order_date, shopper_id) VALUES ('2016-10-23', 5);

INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 7);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 10);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 3);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (1, 1);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (2, 33);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (2, 41);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (3, 35);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (3, 31);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 23);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 2);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 9);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (4, 17);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 11);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 12);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (5, 14);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (6, 13);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 15);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 20);
INSERT INTO ordered_items(order_id, grocery_id) VALUES (7, 25);
