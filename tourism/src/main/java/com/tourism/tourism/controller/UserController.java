package com.tourism.tourism.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tourism.tourism.entity.User;
import com.tourism.tourism.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> getUsers() {
        return service.getAllUsers();
    }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.createUser(user);
    }

    @PostMapping("/login")
public User login(@RequestBody User user) {
    return service.login(user.getEmail(), user.getPassword())
                  .orElseThrow(() -> new RuntimeException("Invalid email or password"));
}

}
