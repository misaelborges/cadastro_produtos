function Tabela({ lista }) {
    return (
        <table className="table">
            <thead>
                <th>Código-Produto</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Preço</th>
                <th>Selecionar</th>
            </thead>

            <tbody >
                {
                    lista.map((objeto, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.marca}</td>
                            <td>{objeto.preco}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;