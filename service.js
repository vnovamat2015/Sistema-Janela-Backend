const dao = require ('./dao.js')

exports.bairroEncontrado = function(nomebairro){
  const resultado = dao.localizaBairro(nomebairro)
  return resultado
}

exports.todosBairros = function(){
    const resultado = dao.listaBairros()
    return resultado
}




