package com.misael.produtos.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.misael.produtos.entities.Produto;
import com.misael.produtos.services.ProdutoService;

public class ProdutoController {
    
    @Autowired
    private ProdutoService service;

    @GetMapping("/list")
    public List<Produto> list() {
        return service.list();
    }

    @GetMapping("/list/{id}")
    public Optional<Produto> findById(Long id) {
        return service.listById(id);
    }

    @PostMapping("/save")
    public Produto save(Produto produto) {
        return service.save(produto);
    }

    @PutMapping("edit")
    public Produto ediProduto(Produto produto) {
        return service.edit(produto);
    }

    @DeleteMapping("/delete")
    public Boolean delete(Long id) {
        service.delete(id);
        return true;
    }
}
