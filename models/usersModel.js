const db=require('../data/db')
const bcrypt =require('bcrypt')
const util = require('util')
const {User_Added_success,User_retrived_success,User_already_exist} =require('../constants') 


exports.users= async()=>{
const user= await db.select('*').from('user_info').join('roles','user_info.role_id','roles.id');
console.log(user)
return [user,User_retrived_success]
}

exports.addUser=async(body)=>{
    const saltRounds = 10;
   bcrypt.hash(body.password, saltRounds,async function(err, hash) {
        const values={
            username:body.username,
            email:body.email,
            password:hash,
            mobile:body.mobile,
            role_id:body.role_id
        } 
        const exist=await db.select('username','email').from('users').where('email',values.email)
        
        if(exist.length==0){
   
            const data= await db.insert(values).into('users');
            const user= await db.select('*').from('users').join('roles','users.role_id','roles.id')
            return [user,User_Added_success]
        }
        else{
           
            return [,User_already_exist]
        }

      });




 
}