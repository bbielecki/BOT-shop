package shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import shop.model.User;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import shop.repository.UserRepository;
import shop.service.UserServiceInterface;

@RestController
@RequestMapping("/shop")
public class UserController {

    @Autowired
    private UserServiceInterface userService;

    @PostMapping
    @RequestMapping("/register")
    public User registerUser(@RequestBody User user,
                             @RequestHeader MultiValueMap<String, String> headers) {

        User newUser = new User(user.getLogin(), user.getPassword());
        newUser.setAddress(user.getAddress());
        newUser.setName(user.getName());
        newUser.setSurname(user.getSurname());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());
        userService.registerUser(user);
        return newUser;

    }
}
