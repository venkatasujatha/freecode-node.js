const {readFile} =require('fs');
const getText =(path)=>{
    return new promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}
//promises
getText('../content/first.txt').then((result)=>{
    console.log(result);
}).catch((err)=>{console.log(err);
})

