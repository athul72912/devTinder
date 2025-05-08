const express=require("express");


const app=express();
//the below code is conveying that for all request the response from the server will be "Hello from the server"

// app.use("/",(req,res)=>{
//     res.send("Hello from the server");
// });

//the below code is conveying that for /test url request the response from the server will be "Hello from the server"

//this will handle all the HTTP methods API calls to /test
// app.get("/user",(req,res)=>{
//     console.log(req.query)
//     res.send("Hello I am Athul");
// });

app.get("/user/:userid/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send("Hello I am Athul");
});

app.post("/user",(req,res)=>{
    res.send("Hello this is post method");
});

//this will handle only GET call to /user
app.use("/test",(req,res)=>{
    res.send("Hello from the servers");
});

app.listen(3000,()=>{
    console.log("server is successfully running on 3000 port");
});