const express = require('express');
const app = express();
const path = require('path');
const router=express.Router();    
// const port = 3000;

router.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('Welcome to My Homepage')
// })

app.use('/',router);

app.listen(process.env.port || 3000);