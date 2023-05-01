package com.backend.ToDo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.backend.ToDo.model.user;
import com.backend.ToDo.repository.userRepository;

@Service
public class userServiceImp implements userService {
    @Autowired
    private userRepository userRepo;

    @Override
    public void addUser(user user) {
        userRepo.save(user);
    }

    @Override
    public List<user> getAll() {
        return userRepo.findAll();
    }

    @Override
    public user updateUser(user user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public user getUserByEmail(String email) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserByEmail'");
    }

}
