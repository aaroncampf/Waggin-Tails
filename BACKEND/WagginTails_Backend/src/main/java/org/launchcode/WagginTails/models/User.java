package org.launchcode.WagginTails.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


//user model class to define variable needs for user class, login
@Entity
public class User {


    // ID annonation, generated value annotation to generated and increase id per user entry
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String userName;
    private String password;


    // empty user tostring
    public User() {
    }

    // may need to refactor code for to string
    public User(String userName, String password) {
                this.userName = userName;
                this.password = password;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
