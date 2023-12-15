package org.launchcode.WagginTails.controllers;


import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.data.DogRepository;
import org.launchcode.WagginTails.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/dog")
public class DogController {

    @Autowired
   private DogService dogService;



    /* -Post mapping request once data to add dog profile has been created.
    -At http:localhost:8080/dog/add (URL through post mapping that adds dog in database
    -named function add new Dog from instance of dog model
    -request body is looking for fields of dog class with new instance called newDOg
    - using dogservice.saveDog) method in dog service that saves instance of dof class
    */

    @PostMapping("/add")
    public String addNewDog(@RequestBody Dog dog){
        dogService.saveDog(dog);
        return "New Dog has Been added";
    }

    @GetMapping("/alldogs")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }

    }
