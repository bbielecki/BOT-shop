package shop.service;

import shop.model.Product;

import java.util.List;

public interface ProductServiceInterface {
    Product getProductById(int id);
    List<Product> getAllProducts();
    Product addProduct(Product productToAdd);
}
