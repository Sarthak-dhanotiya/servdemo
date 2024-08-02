const http=require("http");
const port=8081;

http
.createServer((req,res)=>
{
    // 200 means ok
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>hey server started 123456 sartha: </h2>");
    res.end();
})
.listen(port,()=>{
    console.log("nodejs server started running on port :${port}"

    );
});