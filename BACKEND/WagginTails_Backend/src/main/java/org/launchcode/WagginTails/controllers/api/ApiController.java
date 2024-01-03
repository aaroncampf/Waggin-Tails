package org.launchcode.WagginTails.controllers.api;


import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.User;
import org.launchcode.WagginTails.models.data.UserRepository;
import org.launchcode.WagginTails.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class ApiController {


    @Autowired
    private UserRepository userRepository;


    @Autowired
    private DogService dogService;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {

        return userRepository.save(newUser);
    }

    @GetMapping("/list")
    List<Dog> listAllDogs(Model model) {
        //List<Dog> dogs = dogService.getAllDogs();
        //model.addAttribute("dogs", dogs);
        //return "dogs/list";
        return dogService.getAllDogs();
    }

}
