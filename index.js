const express = require('express');
const server = express();
const user = require('./router/user');
//ejs 설정
server.set('views', './views')
server.set('view engine' , 'ejs')

//정적파일
server.use(express.static('public'));
server.use(express.json())
server.use(express.urlencoded({extended:false}));

server.use('/user' , user);




server.get('/' ,(req,res) => {
    res.send(`hello world`)
})


server.listen(3000 , (err) => {
    if(err) return console.log(`is err => ${err}`)
    else console.log('connect');
})