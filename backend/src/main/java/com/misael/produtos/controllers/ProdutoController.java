package com.misael.produtos.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.misael.produtos.entities.Produto;
import com.misael.produtos.services.ProdutoService;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {
    
    @Autowired
    private ProdutoService service;

    @GetMapping("/list")
    public ResponseEntity<List<Produto>> list() {
        return ResponseEntity.status(200).body(service.list());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<Produto>> findById(@PathVariable Long id) {
        return ResponseEntity.status(200).body(service.listById(id));
    }

    @PostMapping("/save")
    public ResponseEntity<Produto> save(@RequestBody Produto produto) {
        return ResponseEntity.status(201).body(service.save(produto));
    }

    @PutMapping("/edit")
    public ResponseEntity<Produto> ediProduto(@RequestBody Produto produto) {
        return ResponseEntity.status(201).body(service.edit(produto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.status(204).build();
    }
}
