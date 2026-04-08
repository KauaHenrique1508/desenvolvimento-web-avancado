const http = require('node:http')
const port = 3000
const fs = require ('node:fs')

function lerArquivoJson(nomeArquivo){
    const conteudo = fs.readFileSync(nomeArquivo, 'utf-8')
    return JSON.parse(conteudo)
}

const callback = (req, res) => {
    const url = new URL (`http://localhost:${port}${req.url}`)
    const rota = url.pathname
    //Sempre definir antes de enviar o response
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
 try{
        if(rota === '/carros/classicos'){
        res.statusCode = 200
        const dados = lerArquivoJson("classicos.json")
        res.end(JSON.stringify(dados))
        } else if (rota === '/carros/esportivos'){
        res.statusCode = 200
        const dados = lerArquivoJson("esportivos.json")
        res.end (JSON.stringify(dados)) 
        }else if (rota === '/carros/luxo'){
        res.statusCode = 200
        const dados = lerArquivoJson("luxo.json")
        res.end (JSON.stringify(dados))  
        } else{
            res.statusCode = 404
            res.end('404 - Página não encontrada')
        }
    } catch (erro){
        res.statusCode = 500
        res.end(JSON.stringify({ erro: 'Erro ao ler arquivo JSON' }))

    }
}

const server = http.createServer(callback)

server.listen(port, () => {
  console.log('Servidor executando em http://localhost:' + port)
})