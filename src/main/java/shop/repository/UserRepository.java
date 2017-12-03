package shop.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Repository;
import shop.model.User;

@Repository
public class UserRepository implements UserRepositoryInterface{

    private SessionFactory factory;

    @Override
    public void registerUser(User user) {
        factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();
        Transaction transaction;
        Integer userId;

        transaction = session.beginTransaction();
        userId = (Integer) session.save(user);
        transaction.commit();
        session.close();
    }
}
