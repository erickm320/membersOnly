UPDATE posts
SET content = $1
WHERE post_id = $2;


SELECT * FROM posts 
WHERE songs_id = $3;