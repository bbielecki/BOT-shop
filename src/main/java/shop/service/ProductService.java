package shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shop.model.Product;
import shop.repository.ProductRepositoryInterface;

import java.util.List;

@Service
public class ProductService implements ProductServiceInterface {

    @Autowired
    private ProductRepositoryInterface productRepository;

    @Override
    public Product getProductById(int id) {
       return productRepository.getProductById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.getAllProducts();
    }

    @Override
    public Product addProduct(Product productToAdd) {
        return productRepository.addProduct(productToAdd);
    }
}
