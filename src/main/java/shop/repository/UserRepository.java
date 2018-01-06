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
        factory = new Configuration()
                .configure()
                .addAnnotatedClass(User.class)
                .buildSessionFactory();

        Session session = factory.openSession();
        Transaction transaction = session.beginTransaction();
        Integer userId = (Integer) session.save(user);
        transaction.commit();
        System.out.println(userId);
        session.close();
    }

    @Override
    public boolean loginUser(User user) {
        System.out.println(user.getAddress());
        boolean canLogin;
        factory = new Configuration()
                .configure()
                .addAnnotatedClass(User.class)
                .buildSessionFactory();

        Session session = factory.openSession();
        User userInDB = session.get(User.class, user.getLogin());

        canLogin = userInDB != null && (userInDB.getPassword().equals(user.getPassword()));

        if (userInDB != null)
            System.out.println(userInDB.getAddress());
        else
            System.out.println("User doesn't exists");

        session.close();
        return canLogin;
    }

    @Override
    public User getUserByName(String userName){

        factory = new Configuration()
                .configure()
                .addAnnotatedClass(User.class)
                .buildSessionFactory();

        Session session = factory.openSession();
        User foundUser = session.get(User.class, userName);
        session.close();

        return foundUser;
    }
}
