package com.backend.ToDo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.ToDo.repository.taskRepository;
import com.backend.ToDo.model.task;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class taskController {
    @Autowired
    taskRepository taskRepository;

    @GetMapping
    public List<task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public task createTask(@RequestBody task task) {
        return taskRepository.save(task);
    }

    @GetMapping("/{id}")
    public ResponseEntity<task> getTaskById(@PathVariable Integer id) {
        Optional<task> task = taskRepository.findById(id);
        return task.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<task> updateTask(@PathVariable Integer id, @RequestBody task task) {
        Optional<task> taskData = taskRepository.findById(id);

        if (taskData.isPresent()) {
            task _task = taskData.get();
            _task.setTitle(task.getTitle());
            _task.setDescription(task.getDescription());
            _task.setDue_date(task.getDue_date());
            _task.setDone(task.isDone());
            return new ResponseEntity<>(taskRepository.save(_task), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTask(@PathVariable Integer id) {
        try {
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
