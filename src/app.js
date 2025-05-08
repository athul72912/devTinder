const express=require("express");


const app=express();
//the below code is conveying that for all request the response from the server will be "Hello from the server"
app.use("/",(req,res)=>{
    res.send("Hello from the server");
});

//the below code is conveying that for /test url request the response from the server will be "Hello from the server"
// app.use("/test",(req,res)=>{
//     res.send("Hello from the servers");
// });

app.listen(3000,()=>{
    console.log("server is successfully running on 3000 port");
});