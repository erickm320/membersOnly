module.exports = {
    create: async(req, res) => { 
        const db = req.app.get('db');
        const {user_id} = req.session.user
        const {songid} = req.params
        const {text} = req.body;
        const posts = await db.posts.add_post(text,user_id,     songid)

        res.status(200).send(posts)
    },
    getSong: async(req,res) => {
        const {songid} = req.params;
        const db = req.app.get('db');
        const posts = await db.posts.get_song(songid)

        res.status(200).send(posts);


    },
    update: async(req, res) => {
        console.log('body', req.body)
        console.log('params', req.params)
        
        const {content} =req.body;
        const {id, songid} = req.params;
        const db = req.app.get('db');
        const posts = await db.posts.update_posts(content,id,songid);
        
        
        res.status(200).send(posts)
    },
    
    delete: async (req, res) => {
        const {id,songid} = req.params;
        console.log(id)
        const db = req.app.get('db');
        const posts = await db.posts.delete_post(id,songid)
        res.status(200).send(posts)
    },
    getPosts: async (req, res) => {
        const {songid} = req.params;
        const db = req.app.get('db');
        const posts = await db.posts.get_posts(songid);

        res.status(200).send(posts)

    }
}