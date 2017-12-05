package shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import shop.model.Product;
import shop.service.ProductService;

import java.util.Arrays;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    @RequestMapping("/products/{id}")
    public Product getProductById(@RequestHeader MultiValueMap<String, String> headers,
                                  @PathVariable int id) {

        return productService.getProductById(id);
    }

    @GetMapping
    @RequestMapping("/products")
    public List<Product> getAllProducts(@RequestHeader MultiValueMap<String, String> headers) {
        return productService.getAllProducts();
    }
}
