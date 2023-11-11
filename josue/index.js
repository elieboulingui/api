const  express = require('express')
const {success}= require('./help')
const server = express()
port = 2000
const morgan = require('morgan')
server.use(express.json())
server.use(express.urlencoded())
server.listen(port,()=>{
console.log(`je suis la ${port}`)
})
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
const utilisateur =[{
    nom:"maroudou maroudou boulingui ",
    prenom:"bouka djeni",
    quatier:"bikele"
},{
    nom:"mounguengui ",
    prenom:"nboue",
    quatier:"sibang"
},
{
    nom:"mudu ",
    prenom:"ngoutou",
    quatier:"sablier"
},{
    nom:"maroudou ",
    prenom:"bouka",
    quatier:"montalier"
}]
server.use(morgan(':method :url :status :res[content-length] - :response-time ms date[web]'))

server.get('/josue',(req,res)=>{
    console.log(req.body)
    const message = 'voici votre demande monsieur'
    res.json(success(message,utilisateur))
})
server.post('/josue',(req,res)=>{
    console.log(req.body)
    const createNewOne = {...req.body,...{id:id,create:Date()}}
    const message = 'voici ce que vous avez cree'
    res.status(200); res.json(success(message,createNewOne))
    utilisateur.push(createNewOne)

})
