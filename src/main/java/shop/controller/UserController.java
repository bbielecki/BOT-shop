package shop.controller;

import shop.model.User;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/shop")
public class UserController {

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
        return newUser;

    }
}
