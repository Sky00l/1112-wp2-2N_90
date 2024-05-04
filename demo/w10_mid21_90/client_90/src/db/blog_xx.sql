CREATE TABLE blog_xx (
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    descrip varchar(255),
    category varchar(255),
    img varchar(255),
    remote_url varchar(255)   
)

TRUNCATE TABLE blog_xx

INSERT INTO blog_xx (id, title, descrip, category, img, remote_url)
VALUES
(1, 'Seven Reasons Why Coffee Is Awesome', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-1.jpg', ''),
(2, 'Travel To Paris', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'travel', '/images/photo-2.jpg', ''),
(3, 'Coffee Brings Friendship', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-3.jpg', ''),
(4, 'Coffee Make You Feel Good', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-4.jpg', ''),
(5, 'Coffee Make You Calm', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'lifestyle', '/images/photo-5.jpg', ''),
(6, '101 Tower In Taipei', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'travel', '/images/photo-6.jpg', ''),
(7, 'Sun Rise From The Mountain', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'travel', '/images/photo-7.jpg', ''),
(8, 'Serene Lake With Trees', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'travel', '/images/photo-8.jpg', ''),
(9, 'Rocks Of Queen Head In Yehliu Taiwan', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'travel', '/images/photo-9.jpg', '')