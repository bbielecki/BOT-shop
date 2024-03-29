package shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shop.model.User;
import shop.repository.UserRepositoryInterface;

@Service
public class UserService implements UserServiceInterface {

    @Autowired
    private UserRepositoryInterface userRepository;

    @Override
    public void registerUser(User userToRegister) {
        userRepository.registerUser(userToRegister);
    }

    @Override
    public boolean loginUser(User userToLogin) {
        return userRepository.loginUser(userToLogin);
    }

    @Override
    public User findUserByName(String userName) {
        return userRepository.getUserByName(userName);
    }
}
