CREATE DATABASE babou;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    role VARCHAR(255),
    name VARCHAR(255),
    firstname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);