package com.backend.ToDo.controller;

import com.backend.ToDo.model.User;
import com.backend.ToDo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
    }
    
}
