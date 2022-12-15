package com.misael.produtos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.misael.produtos.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
}
