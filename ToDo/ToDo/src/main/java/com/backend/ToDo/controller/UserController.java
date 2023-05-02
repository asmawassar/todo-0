package com.backend.ToDo.controller;

import com.backend.ToDo.model.user;
import com.backend.ToDo.service.userService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class userController {

    @Autowired
    userService service;

    @PostMapping("/register")
    @CrossOrigin(origins = "*", methods = { RequestMethod.POST })
    public user registerUser(@RequestBody user user) {
        return service.addUser(user);
    }

    @PutMapping("/update/{id}")
    @CrossOrigin(origins = "*")
    public user updateUser(@RequestBody user user, @PathVariable Long id) {
        return service.updateUser(user);
    }

    @PostMapping("/test")
    public Boolean testUser(@RequestBody user user) {
        return service.testUser(user);
    }

    @PostMapping("/get")
    public user getUser(@RequestBody user user) {
        return service.getUser(user.getEmail());
    }
}
