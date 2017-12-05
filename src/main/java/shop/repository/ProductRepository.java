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
import java.util.stream.Collectors;

@Repository
public class ProductRepository implements ProductRepositoryInterface {

    private SessionFactory factory;

    @Override
    public Product getProductById(int id) {
        factory = new Configuration()
                .configure()
                .addAnnotatedClass(Product.class)
                .buildSessionFactory();

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
        factory = new Configuration()
                .configure()
                .addAnnotatedClass(Product.class)
                .buildSessionFactory();

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
}
