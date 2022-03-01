const db=require('../data/db');

exports.getDevice=async()=>{
    const data=await db.select('*').from('device_info')
   return [data]
}

exports.addDeviceInfo=async()=>{
    
}