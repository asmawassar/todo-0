package com.backend.ToDo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.ToDo.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
