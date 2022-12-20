function Formulario({ botao, eventoInsere, cadastrar, objeto }) {
    return(
        <form>
            <input type="text" value={objeto.nome} onChange={eventoInsere} name="nome" className="form-control" placeholder="Nome" />
            <input type="text" value={objeto.marca} onChange={eventoInsere} name="marca" className="form-control" placeholder="Marca" />
            <input type="text" value={objeto.preco} onChange={eventoInsere} name="preco" className="form-control" placeholder="Preço" />

            {
                botao
                ? 
                <input type="button" onClick={cadastrar} className="btn btn-primary" value="Cadastrar" />
                :
                <div>
                    <input type="button" className="btn btn-warning" value="Alterar" />
                    <input type="button" className="btn btn-danger" value="Remover" />
                    <input type="button" className="btn btn-secondary" value="Cancelar" />
                </div>    
            }
        </form>
    )
}

export default Formulario;