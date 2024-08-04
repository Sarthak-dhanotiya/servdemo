const express=require("express");

const app=express();

app.use(express.json());

const port=8081;

let array1=["learn","new things"];

// GET METHOD
app.get("/hi",(req,res)=>{
    res.status(200).send(array1.toString());
})

// POST METHOD

app.post("/hi",(req,res)=>{
    let newarray=req.body.name;
    array1.push(newarray);
    res.status(201).send(`message: successfully added ${req.body.name} in array1`);
})

// DELETE METHOD

app.delete("/hi",(req,res)=>{
    let deleteelements=req.body.name;
    array1.find((elem,index)=>{
        if(elem===deleteelements){
            array1.splice(index,1);


        }
       res.status(202).send(`message:successfullly deleted ${req.body.name} in array1`);
    });
});

app.listen(port,()=>{
    console.log("nodejs server started running `${port}`");
})