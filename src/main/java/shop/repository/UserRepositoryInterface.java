package shop.repository;

import shop.model.User;

public interface UserRepositoryInterface {
    void registerUser(User user);
    boolean loginUser(User user);
    User getUserByName(String userName);
}
