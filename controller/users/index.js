const models = require('../../database/models');

const getOneUser = async(id) => {
    try {
        console.log(`get id => ${id}`);
        const user = await models.User2.findOne({where: {id}});
        console.log(user)
        return user;
    } catch (error) {
        console.log(`getUsers find one error => ${error}`)
    }
  }
  
const getUsers = async() => {
    try {
        const users = await models.User2.findAll();
        console.log(users)
        return users;
    } catch (error) {
        console.log(`getUsers find All error => ${error}`)
    }
}

const insertUsers = async (user) => {
    try {
        if(user){
         const a = await models.User2.create({
                userId:user.userId,
                name:user.name,
                engName:user.engName
            })
        return a;
        }else{
            console.log(`insert fail`);
        }
    } catch (error) {
        console.log(error)
    }
 }

 const updateUsers = async (user) => {
     console.log(`updateUsers   user => ${user.name} , id => ${user.id}`)
     try {
         const result = await models.User2.update({
            userId:user.userId,
            name:user.name,
            engName:user.engName
             },
            {
                where:{id:user.id}
            }
         ).then((result)=>{
            console.log(`result[1][0] => ${result[1][0]}`);
         })
         return result[1][0];
     } catch (error) {
         console.log(`update error => ${error}`);
     }
 }

 const deleteUser = async (id) =>{
     console.log(`delete id ? => ${id}`);
     try {
         const result = await models.User2.destroy({
             where:{id:id}
         }).then((result) =>{
            console.log(`result[1][0] => ${result[1][0]}`);
         })
         return result[1];
     } catch (error) {
         console.log(`delete error => ${error}`)
     }
 }
  

  module.exports = {
      getOneUser,
      getUsers,
      insertUsers,
      updateUsers,
      deleteUser
  }

