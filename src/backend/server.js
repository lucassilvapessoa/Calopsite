const express = require("express")
const bdd = require("./BDD/bdd")()
const app = express()
const cors = require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.send("ola bem vindo")
})
 app.post("/cadastrar/:email/:senha",(req,res)=>{
    const {email,senha} = req.params
    bdd.InserirUsuario(email,senha,(result)=>{
        res.send(result)
    })
})
 app.post("/inserirPassaro/:anilha/:nome/:especie/:sexo/:data_nascimento/:id_usuario",(req,res)=>{
     const obj = {
         anilha:req.params.anilha,
         nome:req.params.nome,
         especie:req.params.especie,
         sexo:req.params.sexo,
         data_nascimento:req.params.data_nascimento,
         id_usuario : req.params.id_usuario
     }
     bdd.InserirPassaro(obj,result=>{   
         res.send(result)
     })
 })
 app.post("/inserirGaiola/:id/:id_passaro/",(req,res)=>{
     const{id,id_passaro} = req.params
     bdd.InserirGaiola(id,id_passaro,result=>{
         res.send(result)
     })
 })
 app.post("/adicionarGastoGaiola/:tipo/:preco/:id_gaiola/:data_gasto/",(req,res)=>{
     const obj = {tipo:req.params.tipo,preco:req.params.preco,id_gaiola:req.params.id_gaiola,data_gasto:req.params.data_gasto}
     bdd.InserirGasto(obj,result=>{
         res.send(result)
     })
 })
 app.get("/gerarGastoTotalGaioal/:id",(req,res)=>{
     const {id} = req.params
     bdd.GastoTotalGaiolas(id,result=>{
         res.send(result)
     })
 })
 app.get("/totalPassaros/:id",(req,res)=>{
     const{id} = req.params
     bdd.TotalPassaros(id,result=>{
         res.send(result)
     })
 })
app.get("/login/:email/:senha",(req,res)=>{
    const {email,senha} = req.params
    bdd.Login(email,senha,resultado=>{
        res.send(resultado)
    }) 
})
app.get("/buscarPassaroGenero/:id/:genero",(req,res)=>{
    const {id,genero} = req.params
    bdd.TotalPassarosGenero(id,genero,resultado=>{
        res.send(resultado)
    })
})
app.get("/buscarPassarosDisponiveis/:id",(req,res)=>{
    const {id} = req.params
    bdd.TotalPassarosDisponiveis(id,resultado=>{
        res.send(resultado)
    })
})
app.listen(8089)