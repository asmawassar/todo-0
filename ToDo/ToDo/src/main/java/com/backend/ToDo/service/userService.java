package com.backend.ToDo.service;

import java.util.List;

import com.backend.ToDo.model.user;

public interface userService {
    public void addUser(user user);

    public List<user> getAll();

    public user updateUser(user user);

    public user getUserByEmail(String email);
}
