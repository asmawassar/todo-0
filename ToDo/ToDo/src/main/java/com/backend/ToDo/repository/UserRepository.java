package com.backend.ToDo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.ToDo.model.user;

@Repository
public interface userRepository extends JpaRepository<user, Long> {
}
