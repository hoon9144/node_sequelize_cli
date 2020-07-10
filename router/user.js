const express = require('express');
const router = express.Router();
//../controller/users/index 경로에있는 만들어놓은 컨트롤러 사용.
const { getOneUser, getUsers , insertUsers ,updateUsers ,deleteUser} = require('../controller/users/index');

//유저 한명 조회
router.get('/info/:id', async (req,res)=>{
    const {id} = req.params;
    console.log(`id => ${id}`)
    const user = await getOneUser(id);
    res.json(user);
})

//전체 유저 조회
router.get('/info' , async (req,res) =>{
    
    const users = await getUsers();
    console.log(`users => ${users}`);
    res.json(users);
})

//가입페이지
router.get('/join', (req,res)=>{
    console.log(`join`);
    res.render('user_join')
})

//가입페이지에서 폼 날라온거 가입 처리.
router.post('/join/insert' , async (req,res) => {
    const user = { userId , name , engName } = req.body;
    console.log(user);
    const request = await insertUsers(user);
    console.log(`request =>` , request)
})

//업데이트 페이지
router.get('/update',(req,res)=> {
    console.log('user_update');
    res.render('user_update')
})

//업데이트 처리
router.post('/info/update' , async (req,res)=>{
    const user = { id ,userId , name , engName } = req.body;
    const request = await updateUsers(user);
    console.log(`update request =>` , request)
})

//델리트 페이지
router.get('/delete' , (req,res) =>{
    res.render('user_delete');
})

//델리트 처리
router.post('/delete' , async (req,res) =>{
    console.log(`꺌라ㅏㄹ라ㅏㄹ라`)
    const id = req.body.id;
    console.log(`delete id ? => ${id}`);
    const request = await deleteUser(id);
    console.log(`delete request => ${request}`);
})


module.exports = router;