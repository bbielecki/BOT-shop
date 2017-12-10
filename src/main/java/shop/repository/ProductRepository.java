package shop.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;
import shop.model.Product;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepository implements ProductRepositoryInterface {

    private SessionFactory factory;

    public ProductRepository() {
        factory = new Configuration()
                .configure()
                .addAnnotatedClass(Product.class)
                .buildSessionFactory();
    }

    @Override
    public Product getProductById(int id) {

        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();
        String sqlQuery = "FROM Product WHERE id = " + id;
        Query query = session.createQuery(sqlQuery);
        List resultList = query.list();
        transaction.commit();
        System.out.println(resultList);
        session.close();
        return (Product) resultList.get(0);
    }

    @Override
    public List<Product> getAllProducts() {

        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();
        String sqlQuery = "FROM Product";
        Query query = session.createQuery(sqlQuery);
        List resultList = query.list();
        transaction.commit();
        session.close();

        List<Product> newList = new ArrayList<>();
        for (Object object : resultList) {
            newList.add((Product) object);
        }
        return newList;
    }

    @Override
    public Product addProduct(Product productToAdd) {

        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();
        Integer id = (Integer) session.save(productToAdd);
        transaction.commit();
        session.close();
        return productToAdd;
    }
}
