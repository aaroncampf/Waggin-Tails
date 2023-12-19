package org.launchcode.WagginTails.controllers;


import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.data.DogRepository;
import org.launchcode.WagginTails.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@RestController
@Controller
@RequestMapping("/dog")
public class DogController {



    @Autowired
   private DogService dogService;


@GetMapping("/list")
public String listAllDogs(Model model){
    List<Dog> dogs = dogService.getAllDogs();
    model.addAttribute("dogs", dogs);
    return "dogs/list";
}
//Get Mapping request for localhost:8080/dog/add to obtain information for dog model
    @GetMapping("/add")
    public String addNewDog(Model model) {
        Dog dog = new Dog();
        model.addAttribute("dog", dog);
        return "dogs/add";
    }
    /* -Post mapping request once data to add dog profile has been created.
    -At http:localhost:8080/dog/add (URL through post mapping that adds dog in database
    -named function add new Dog from instance of dog model
    -request body is looking for fields of dog class with new instance called newDOg
    - using dogservice.saveDog) method in dog service that saves instance of dof class
    */

@PostMapping("/add")
public String saveNewDog(@ModelAttribute("dog") Dog dog){
    dogService.saveDog(dog);
    return "redirect:/dog/list";
}

    // Get Mappig Request to see list of dog in url localhost:8080//dog/alldogs
    //named method getAllDogs, used List to list Dog model from database, return dogsService.getAllDogs
    /*@GetMapping("/list")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }*/




    }
