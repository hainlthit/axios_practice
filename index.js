const axios = require("axios");
const express = require("express");

const PORT = 8888; 

const app = express();

app.listen(PORT,()=>{console.log(`Running This App on the port ${PORT}`);
});

app.get("/",(req, res)=> {
    res.send("Hello There! This is main")
})

app.get("/store",(req, res)=> {
    res.send("Hello There! You're at the Store")
})

axios.get("https://reqres.in/api/users")
.then((result) => {
    console.log(result.data);
}).catch((err)=> {console.log(err)})

// axios.post("https://reqres.in/api/users", { 
//     "name": "morpheus",
//     "job": "leader"
// })
// .then((result) => {
//     console.log(result.data);
// }).catch((err)=> {console.log(err)})

// axios.put("https://reqres.in/api/users/2", { 
//     "name": "morpheus",
//     "job": "zion resident"
// })
// .then((result) => {
//     console.log(result.data);
// }).catch((err)=> {console.log(err)})

axios.patch("https://reqres.in/api/users/2", { 
    "name": "morpheus",
    "job": "zion resident"
})
.then((result) => {
    console.log(result.data);
}).catch((err)=> {console.log(err)})

// axios.delete("https://reqres.in/api/users/2")
// .then((result) => {
//     console.log(result.data);
// }).catch((err)=> {console.log(err)})