package shop.service;

import shop.model.User;

public interface UserServiceInterface {
    void registerUser(User userToRegister);
    boolean loginUser(User userToLogin);
}
