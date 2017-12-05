package shop.repository;

import shop.model.Product;
import java.util.List;

public interface ProductRepositoryInterface {
    Product getProductById(int id);
    List<Product> getAllProducts();
}
