-- Write queries that result in this data model: https://dbdiagram.io/d/5f0460690425da461f045a29
DROP DATABASE IF EXISTS meal_sharing_db;
CREATE DATABASE meal_sharing_db DEFAULT CHARACTER SET utf8mb4 COLLATE = utf8mb4_unicode_ci;

USE meal_sharing_db;

DROP TABLE IF EXISTS `meal`;
CREATE TABLE meal (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL UNIQUE,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
when_date DATETIME NOT NULL,
max_reservation INT UNSIGNED NOT NULL,
price DECIMAL(5,2) NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE reservation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
number_of_guests INT UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
contact_phonenumber VARCHAR(255) NOT NULL UNIQUE,
contact_name VARCHAR(255) NOT NULL,
contact_email VARCHAR(255) NOT NULL UNIQUE,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `review`;
CREATE TABLE review (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT UNSIGNED NOT NULL,
stars INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

-- Get all meals 
SELECT *
FROM meal;

-- Add a new meal 
INSERT INTO meal (
  id,
  title,
  description,
  location,
  when_date,
  max_reservation,
  price) VALUES (
  1,
  'Wild Foraged Dinner',
  'Try all the tastes from the wilderness! We went to collect various types of mushrooms and roots 
   and herbs so you don´t have to. Just come and enjoy delicious wild menu: 
   Rusula ragu spiced with sorrel , Lekinum risotto spiced with yarrow, 
   Wild champignon cream soup spiced with carrot root',
  'Copenhagen, at the big kitchen of Bikuben Kollegiet, where i live',
  '2021-01-01 18:00:00',
  15,
  150.00);

   
  INSERT INTO meal (
  title,
  description,
  location,
  when_date,
  max_reservation,
  price) VALUES (
  'Fancy Dinner',
  'Expensive dinner for the whole family. Super rare ingredients.',
  'Copenhagen, finest restaurant',
  '2021-01-01 18:00:00',
  8,
  500.00);
  
  INSERT INTO meal (
  title,
  description,
  location,
  when_date,
  max_reservation,
  price) VALUES (
  'Seafood madness',
  'FUN family lobster/crab/oysters mukbank',
  'Copenhagen, on a boat',
  '2021-01-01 18:00:00',
  10,
  100.00);
  
INSERT INTO meal (
  title,
  description,
  location,
  when_date,
  max_reservation,
  price) VALUES (
  'Dine on a budget',
  'Tasty food for affordable prices. 3 course meal.',
  'Copenhagen, at my home',
  '2021-01-01 18:00:00',
  4,
  25.00);
  
  INSERT INTO meal (
  title,
  description,
  location,
  when_date,
  max_reservation,
  price) VALUES (
  'Perfect date dinner',
  'Eat with a view on a table covered with roses. Food is spicy and sweet.',
  'Copenhagen, location not disclosed yet',
  '2021-01-01 18:00:00',
  2,
  80.00);
 
-- Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx. 1. Update any attribute fx the title of multiple attributes
UPDATE meal
SET title = 'Unique and Wild Foraged Dinner'
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 2;

-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation (
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
5,
1,
NOW(),
'60515274',
'ember',
'ipoljupci@gmail.com'
);

INSERT INTO reservation (
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
5,
1,
NOW(),
'12345678',
'valentina',
'vmendez@gmail.com'
);

INSERT INTO reservation (
number_of_guests,
meal_id,
created_date,
contact_phonenumber,
contact_name,
contact_email
) VALUES (
7,
1,
NOW(),
'87654321',
'kavya',
'kavya@gmail.com'
);

-- Get a reservation with any id fx. 
SELECT *
FROM reservation 
WHERE id = 2;

-- Update a reservation with any id, fx. 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET number_of_guests = 6
WHERE id = 2;

-- Delete a reservation with any id, fx. 1.
DELETE FROM reservation
WHERE id = 1;

-- Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'perfect!!!',
    'it was so perfect and delicious',
    1,
    5
);


INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'so-so!!!',
    'average/mild/bland',
    3,
    3
);

INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'good!!!',
    'tastes very nice',
    2,
    4
);

INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'terrible!!!',
    'pure disaster',
    5,
    1
);

INSERT INTO review (
    title,  
    description,
    meal_id,
    stars
) VALUES (
    'nearly terrible!!!',
    'barely digestable',
    6,
    2
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * 
FROM meal
WHERE price < 200;

-- Get meals that still has available reservations
SELECT meal.id, meal.title, meal.location, meal.when_date, SUM(reservation.number_of_guests), meal.max_reservation
FROM meal 
JOIN reservation ON reservation.meal_id = meal.id
WHERE when_date >= current_timestamp
GROUP BY reservation.meal_id
HAVING SUM(reservation.number_of_guests) < meal.max_reservation;

-- Get meals that partially match a title.
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE 'Rød grød med%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE (created_date BETWEEN '2020-10-19 14:00:00' AND '2020-10-19 15:09:00');

-- Get only specific number of meals fx. return only 5 meals
SELECT * 
FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT meal.id, meal.title, meal.location, review.stars, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE review.stars >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation 
WHERE meal_id = 1
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.location, review.title, review.description, review.created_date
FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;