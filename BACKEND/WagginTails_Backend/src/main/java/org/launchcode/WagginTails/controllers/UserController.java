package org.launchcode.WagginTails.controllers;


import org.launchcode.WagginTails.models.User;
import org.launchcode.WagginTails.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


// Rest controllers for rest api connection to react front end app later
@RestController
public class UserController {


    // created instance of userepository to access methods to save dara
    @Autowired
    private UserRepository userRepository;


    // Post mapping request for postman, created instance of user class in models package, user requesrt body to access data fields, in return user userrepo instance with save method to save data to post request to send to database
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
       return userRepository.save(newUser);
    }

    /*@GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }*/
}
