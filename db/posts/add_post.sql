INSERT INTO posts( content, user_id, songs_id)
VALUES($1,$2,$3);

SELECT * FROM posts
WHERE songs_id = $3;