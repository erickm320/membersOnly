require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'), 
      authCtrl = require('./authController'),
      postCtrl = require('./postController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT;
      path = require('path')



const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,  '../build/index.html'));
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
});


app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

app.get('/x/songs', (req, res) => {
    res.sendStatus(200)} );

const postsBaseUrl = "/api/posts";
app.get(`${postsBaseUrl}/:postid`, postCtrl.getPosts);
app.post(`${postsBaseUrl}/:songid`, postCtrl.create);
app.get(postsBaseUrl, postCtrl.getSong);
app.put(`${postsBaseUrl}/:id/:songid`, postCtrl.update);
app.delete(`${postsBaseUrl}/:id/:songid`, postCtrl.delete) 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})