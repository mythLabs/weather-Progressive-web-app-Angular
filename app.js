const express= require('express');
const http= require('http');
const path = required('path');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res)=>{
 res.sendfile(path.join(__dirname,'dist/index.html'));
});

const port =process.env.PORT || 3000;
app.set('port',port);

const server = http.createServer(app);
server.listen(port,()=>{ console.log("Running") });