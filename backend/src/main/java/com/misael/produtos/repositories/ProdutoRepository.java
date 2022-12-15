package com.misael.produtos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.misael.produtos.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
