package com.misael.produtos.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.misael.produtos.entities.Produto;
import com.misael.produtos.repositories.ProdutoRepository;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class ProdutoService {
    
    @Autowired
    private ProdutoRepository repository;

    public List<Produto> list() {
        return repository.findAll();
    }

    public Optional<Produto> listById(@PathVariable Long id) {
        return repository.findById(id);
    }

    public Produto save(Produto produto) {
        return repository.save(produto);
    }

    public Produto edit(Produto produto) {
        return repository.save(produto);
    }

    public Boolean delete(Long id) {
        repository.deleteById(id);
        return true;
    }
    
}
