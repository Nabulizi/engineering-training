const express = require('express');
const app = express();
const path = require('path');
const router=express.Router();    
const port = 3000;

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/getJiraTickets',(req,res)=>{
  let jirasObject={jirasObject:[]};
  res.json(jirasObject)
})

app.use('/',router);
console.log(__dirname);
app.use(express.static('public'))

app.listen(process.env.port || 3000);

app.listen(()=>{
  console.log("Listening at port "+ port)
})