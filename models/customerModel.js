const db=require('../data/db');

exports.getCutomers= async()=>{
    const user= await db.select('*').from('customers').join('roles','customers.role_id','roles.id').join('device_info','customers.device_id','device_info.id'
    )

    console.log(user);
    return [user]
    }