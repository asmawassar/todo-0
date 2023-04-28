package com.backend.ToDo.model;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
public class task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String title;
    private String description;
    private Date due_date;
    private Boolean done;

    public task() {
    }

    public task(String title, String description, Date due_date, Boolean done) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.done = done;
    }

    public Integer getId() {
        return this.Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDue_date() {
        return this.due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public Boolean isDone() {
        return this.done;
    }

    public Boolean getDone() {
        return this.done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}