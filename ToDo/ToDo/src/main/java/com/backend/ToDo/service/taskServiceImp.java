package com.backend.ToDo.service;

import java.util.List;
import java.util.Optional;
import com.backend.ToDo.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.ToDo.model.task;
import com.backend.ToDo.repository.taskRepository;

@Service
public class taskServiceImp implements taskService {

    @Autowired
    private taskRepository taskRepo;

    @Override
    public task addTask(task task) {

        return taskRepo.save(task);
    }

    @Override
    public List<task> getAll() {

        return taskRepo.findAll();
    }

    @Override
    public task updateTask(task task) {
        Optional<task> optionalTask = taskRepo.findById(task.getId());
        if (optionalTask.isPresent()) {
            task existingTask = optionalTask.get();
            existingTask.setTitle(task.getTitle());
            existingTask.setDescription(task.getDescription());
            existingTask.setDue_date(task.getDue_date());
            existingTask.setDone(task.isDone());
            return taskRepo.save(existingTask);
        } else {
            throw new ResourceNotFoundException("Task", "id", task.getId());
        }
    }

    @Override
    public void deleteTask(Long id) {
        Optional<task> optionalTask = taskRepo.findById(id);
        if (optionalTask.isPresent()) {
            taskRepo.delete(optionalTask.get());
        } else {
            throw new ResourceNotFoundException("Task", "id", id);
        }
    }

    @Override
    public task getTaskById(Long id) {
        Optional<task> optionalTask = taskRepo.findById(id);
        if (optionalTask.isPresent()) {
            return optionalTask.get();
        } else {
            throw new ResourceNotFoundException("Task", "id", id);
        }
    }
}
