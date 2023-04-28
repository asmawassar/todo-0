package com.backend.ToDo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.ToDo.model.task;

@Repository
public interface taskRepository extends JpaRepository<task, Integer> {

}
