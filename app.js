import bcrypt, { hash } from 'bcrypt';
import express from 'express';

const app=express()
app.use(express.json())
const users=[

]
app.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    const hash= await bcrypt.hash(password,10);
    users.push({
        username,
        password:hash
    })
    
    console.log(users)
    res.send('ok')
})

app.post('/login',async(req,res)=>{
    const {username,password}=req.body
    const user=users.find(u=>u.username === username)
    if(!user){
        res.send("Wrong Password")
        return
    }
    const isvalid= await bcrypt.compare(password,user.password)

    if(!isvalid){
        res.send("Wrong Password")
        return
    }
    
    
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  