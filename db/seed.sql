CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100)
)

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY, 
    title VARCHAR(20),
    content TEXT,
    user_id INT REFERENCES users(user_id)
    songs_id INT REFERENCES songs(songs_id)
)

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    content TEXT,
    post_id INT REFERENCES posts(post_id),
    user_id INT REFERENCES users(user_id)

)
CREATE TABLE songs(
    songs_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    album_id INT,
    album_title VARCHAR(50),

)