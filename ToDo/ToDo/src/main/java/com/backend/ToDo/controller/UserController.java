package com.backend.ToDo.controller;

import com.backend.ToDo.model.user;
import com.backend.ToDo.service.taskService;
import com.backend.ToDo.service.userService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.*;

@RestController
@RequestMapping("/api/users")
public class userController {

    @Autowired
    @Qualifier("userService")
    userService Uservice;

    @GetMapping
    public List<user> getAllUsers() {
        return Uservice.getAll();
    }

    @PostMapping("/add")
    // @CrossOrigin(origins = "*", methods = { RequestMethod.POST })
    public void registerUser(@RequestBody user user) {
        Uservice.addUser(user);
    }
}
