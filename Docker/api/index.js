const express = require('express')
const app = express()
const port = 4000
app.get('/', (req,res)=>{
    res.json([
      {
        name:'Ankit',
        age:19
      },
      {
        name:'Jay',
        age:20
      },
      {
        name:'Pratik',
        age:22
      },
      {
        name:'Dhruv',
        age:20
      },
])
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})