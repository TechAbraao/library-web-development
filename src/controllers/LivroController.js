import Livro from "../models/Livro.js"


export default function adicionandoLivro(req, res) {
    const novoLivro = req.body
    const novoLivroJson = JSON.stringify(novoLivro)
    
    Livro.create({
        titulo: novoLivro.titulo,
        autor: novoLivro.autor,
        dataPublicacao: novoLivro.dataPublicacao,
        editora: novoLivro.editora,
        quantidadePaginas: novoLivro.quantidadePaginas,
        genero: novoLivro.genero,
        sinopse: novoLivro.sinopse,
        capa: novoLivro.capa,
    })

    res.status(200).send(novoLivroJson)

}

