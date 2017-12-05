package shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import shop.model.Product;
import shop.model.User;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import shop.service.UserServiceInterface;

@RestController
//TODO GET product, GET wszystkie produkty
public class UserController {

    @Autowired
    private UserServiceInterface userService;

    @PostMapping
    @RequestMapping("/register")
    public User registerUser(@RequestBody User user,
                             @RequestHeader MultiValueMap<String, String> headers) {
        userService.registerUser(user);
        return user;
    }


}
