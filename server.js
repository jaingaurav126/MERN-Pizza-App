const express = require('express');
const app = express();

app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Server working fine");
})
const port=process.env.PORT || 5000;
app.listen(port,()=>'Server running on port 6000');
