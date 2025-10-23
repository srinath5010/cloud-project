package com.tourism.tourism.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tourism.tourism.entity.User;
import com.tourism.tourism.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User createUser(User user) {
        return repository.save(user);
    }

    // ✅ New method for login
    public Optional<User> login(String email, String password) {
        Optional<User> user = repository.findByEmail(email);
        if(user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
