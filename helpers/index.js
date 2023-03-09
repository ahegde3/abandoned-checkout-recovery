

const checkObjectSanity=(val)=>{

    if(typeof val !='object' || Object.keys(val).length==0) return false;
    return true

}


module.exports={checkObjectSanity}