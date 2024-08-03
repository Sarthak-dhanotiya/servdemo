const http=require("http");

const port=8081;

    const arr=["hi","it ","is","server"];


http
.createServer((req,res)=>{
    
    const{method,url}=req;

    if(url==="/hi"){
        // GET METHOD
        if(method==="GET"){
            res.writeHead(200);
            res.write(arr.toString());
        }  // POST METHOD
        else if(method==="POST"){
            let body="";
        req
        .on("error",(err)=>{
            console.error(err);
})
.on("data",(chunk)=>{
    body+=chunk;

})

.on("end",()=>{
    body=JSON.parse(body);

   
    arr.push(body.item);
    console.log("successfully append");
}
)

}
// DELETE METHOD
else if(method==="DELETE"){
    let body="";
    req
    .on("error",(err)=>{
        console.log(err);

    })

    .on("data",(chunk)=>{
        body+=chunk;
    })

    .on("end",()=>{
        body=JSON.parse(body);
        let hi=body.item;
        arr.find((elem,index)=>{
            if(elem===hi){
               arr.splice(index,1); 
            }
        });
    });
}


      

        
    }
    res.end();
})

.listen(port,()=>{
    console.log(`NodeJS server started running on port :${port}`);
});

