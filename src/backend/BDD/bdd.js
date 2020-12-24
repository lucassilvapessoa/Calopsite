const mysql = require("mysql")
const md5 = require("md5")
const jwt = require("jsonwebtoken")
const connection =  mysql.createPool({
    host:"localhost",
    user:"root",
    password:'root',
    database:"calopsite",
    port:"3307",
    connectionLimit:200
    }
)
 module.exports = function Bdd(){    
     function InserirUsuario (email,senha,callback){
         connection.getConnection((erro)=>{
            if(erro){
                console.log(erro)
                callback("erro ao gerar conexão")
            }else{
               const obj  = {
                   email,
                   senha:md5(senha)
               }
               const verificarUsuarioeSenha = "select *from usuario where email = ? and senha = ?"
               const string = "insert into usuario SET ?"
               connection.query(verificarUsuarioeSenha,[obj.email,obj.senha],((err,result)=>{
                   if(err){
                       callback("Erro ao verificar usuario e senha")
                   }else{
                       if(result.length>0){
                           callback("Escolha usuario e senha diferentes")
                        }else{
                            connection.query(string,obj,err=>{
                                if(err){
                                    callback("Erro ao inserir usuario")
                                }else{
                                    callback("Usuario inserido com sucesso")
                                }
                            })
                        }
                   }

               })             
         )}
            })
        }
         function InserirPassaro(obj,callback){
             connection.getConnection((erro)=>{
                 if(erro){
                     callback("Erro ao gerar conexa")
                 }else{
                     const string = "insert into passaro SET ?"
                     connection.query(string,obj,erro=>{
                         if(erro){
                             callback("Erro ao inserir passaro")
                         }else{
                             console.log(obj.nome + " inserido com sucesso")
                             callback("Passaro inserido com sucesso")
                         }
                     })
                 }
             })
        }
         function InserirGaiola(id,id_passaro,callback){
                connection.getConnection((erro)=>{
                    if(erro){
                        callback("Erro ao gerar conexao")
                    }else{
                        const obj = {
                            id, 
                            id_passaro,
                        }
                        const string = "insert into gaiola SET ?"
                        connection.query(string,obj,erro=>{
                            if(erro){
                                callback("Erro ao inserir gaiola")
                            }else{
                                console.log(`Gaiola:${id} passaro:${id_passaro}  inserido com sucesso`)
                                callback("Gaiola inserida com sucesso")
                            }
                        })
                    }
                })
        }
       function InserirGasto(obj,callback){
                connection.getConnection((erro)=>{
                    if(erro){
                        callback("Erro ao gerar conexão")
                    }else{
                        const string = "insert into gasto SET ?"
                        connection.query(string,obj,erro=>{
                            if(erro){
                                callback("Erro ao inserir gasto")
                            }else{
                                callback("Gasto na gaiola adicionado com sucesso")
                            }
                        })
                    }
                })                        
     }
     function GastoTotalGaiolas(id,callback){
         connection.getConnection(err=>{
             if(err){
                 callback("Erro ao gerar conexão")
             }else{
                 const string = "select sum(preco) from gasto inner join gaiola on gasto.id_gaiola = gaiola.id inner join passaro on gaiola.id_passaro = passaro.id inner join usuario on passaro.id_usuario = usuario.id where usuario.id = ?"
                 connection.query(string,id,((err,result)=>{
                     if(err){
                         callback("Erro ao realizar busca total nas gaiolas ")
                     }else{
                         callback(result)
                     }
                 }))
             }
     }
    )}
    function TotalPassaros(id,callback){
    connection.getConnection(err=>{
        if(err){
            callback("Erro ao gerar conexão")
        }else{
            const string = "select count(passaro.id) from passaro inner join usuario on passaro.id_usuario = usuario.id where usuario.id = ?"
            connection.query(string,id,((err,result)=>{
                if(err){
                    callback("Erro ao realizar a busca do total de passaros")
                }else{
                    callback(result)
                }
            }))
        }
    })
   }
   function TotalPassarosGenero(id,genero,callback){
  connection.getConnection(err=>{
      if(err){
          callback("Erro ao gerar conexão")
      }else{
          const string = "select count(passaro.id) from passaro where id_usuario = ? and sexo = ? "
          connection.query(string,[id,genero],((err,result)=>{
              if(err){
                  callback("Erro ao relizar busca por genero")
              }else{
                callback(result)
              }
          }))
      }
  })
   }
   function TotalPassarosDisponiveis(idusuario,callback){
     connection.getConnection(err=>{
         if(err){
             callback("Erro ao gerar conexão")
         }else{
             const string = "select count(passaro.id)  from passaro where id_usuario = ? and passaro.id not in (select id_passaro from gaiola)"
             connection.query(string,idusuario,((err,result)=>{
                 if(err){
                     callback("Erro ao buscar total de passaros disponiveis")
                 }else{
                     callback(result)
                 }
             }))
         }
     })
   }
   function Login(email,senha,callback){
       connection.getConnection(err=>{
           if(err){
               callback("Erro ao gerar coneão")
           }else{
            const verificarUsuarioeSenha = "select *from usuario where email = ? and senha = ?"
               connection.query(verificarUsuarioeSenha,[email,md5(senha )],((err,result)=>{
                   if(err){
                       callback("Erro ao realizar consulta de login")
                   }else{
                    if(result.length>0){
                        let token = jwt.sign({email:email,senha:md5(senha)},"lucas123",{expiresIn:"1h"})
                        callback({id:result[0].id,token})
                    }else{
                        callback(false)
                    }
                   }
               }))
           }
       })
   }    
     return {
     InserirUsuario,
     InserirPassaro,
     InserirGaiola,
     InserirGasto, 
     GastoTotalGaiolas,
     TotalPassaros,
     Login,
     TotalPassarosGenero,
     TotalPassarosDisponiveis,
    }
}












