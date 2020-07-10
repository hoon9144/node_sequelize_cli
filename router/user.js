const express = require('express');
const server = express();
const router = express.Router();
const { getOneUser, getUsers , insertUsers ,updateUsers ,deleteUser} = require('../controller/users/index');


router.get('/info/:id', async (req,res)=>{
    const {id} = req.params;
    console.log(`id => ${id}`)
    const user = await getOneUser(id);
    res.json(user);
})

router.get('/info' , async (req,res) =>{
    
    const users = await getUsers();
    console.log(`users => ${users}`);
    res.json(users);
})

router.get('/join', (req,res)=>{
    console.log(`join`);
    res.render('user_join')
})

router.post('/join/insert' , async (req,res) => {
    const user = { userId , name , engName } = req.body;
    console.log(user);
    const request = await insertUsers(user);
    console.log(`request =>` , request)
})

router.get('/update',(req,res)=> {
    console.log('user_update');
    res.render('user_update')
})

router.post('/info/update' , async (req,res)=>{
    const user = { id ,userId , name , engName } = req.body;
    const request = await updateUsers(user);
    console.log(`update request =>` , request)
})

router.get('/delete' , (req,res) =>{
    res.render('user_delete');
})

router.post('/delete' , async (req,res) =>{
    console.log(`꺌라ㅏㄹ라ㅏㄹ라`)
    const id = req.body.id;
    console.log(`delete id ? => ${id}`);
    const request = await deleteUser(id);
    console.log(`delete request => ${request}`);
})


module.exports = router;