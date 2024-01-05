package org.launchcode.WagginTails.controllers.api;


import org.launchcode.WagginTails.models.AdoptionApplication;
import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.User;
import org.launchcode.WagginTails.models.data.AdoptionApplicationRepository;
import org.launchcode.WagginTails.models.data.UserRepository;
import org.launchcode.WagginTails.service.AdoptionApplicationService;
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
    AdoptionApplicationRepository applicationRepository;

    @Autowired
    private DogService dogService;

    @Autowired
    private AdoptionApplicationService adoptionApplicationService;

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

    @PostMapping("/saveAdoptionApplication")
    AdoptionApplication newApplocation(@RequestBody AdoptionApplication newApplication) {

        return applicationRepository.save(newApplication);
    }

    @GetMapping("/listAllApplications")
    List<AdoptionApplication> listAllApplications(Model model) {
        //List<Dog> dogs = dogService.getAllDogs();
        //model.addAttribute("dogs", dogs);
        //return "dogs/list";
        return adoptionApplicationService.getAllApplications();
    }

}
