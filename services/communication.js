

const sendCommunication=async(id,custId,tokenId)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(resolve({id}),2000)
    })
}


module.exports={sendCommunication}