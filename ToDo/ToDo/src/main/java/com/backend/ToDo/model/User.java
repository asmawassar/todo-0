package com.backend.ToDo.model;

import jakarta.persistence.*;

@Entity
public class user {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long Id;
   @Column(nullable = false, unique = true)
   private String email;
   private String password;

   private String username;

   public Long getId() {
      return Id;
   }

   public void setId(Long id) {
      Id = id;
   }

   public user(String email, String password, String username) {
      this.email = email;
      this.password = password;
      this.username = username;
   }

   @Override
   public String toString() {
      return password;
   }

   public user() {
      this.email = "";
      this.password = "";
      this.username = "";
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getUsername() {
      return username;
   }

   public void setUsername(String username) {
      this.username = username;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

}
