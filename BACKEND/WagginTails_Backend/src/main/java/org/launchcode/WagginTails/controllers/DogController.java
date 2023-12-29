package org.launchcode.WagginTails.controllers;


import jakarta.validation.Valid;
import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.service.DogService;
import org.launchcode.WagginTails.service.dogNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
//@Controller
@RequestMapping("/dog")
public class DogController {


    @Autowired
    private DogService dogService;


    @GetMapping("/list")
    public String listAllDogs(Model model) {
        List<Dog> dogs = dogService.getAllDogs();
        model.addAttribute("dogs", dogs);
        return "dogs/list";
    }

    //Get Mapping request for localhost:8080/dog/add to obtain information for dog model
    @GetMapping("/add")
    public String addNewDog(Model model) {
        Dog dog = new Dog();
        model.addAttribute("dog", dog);
        model.addAttribute("pageTitle", "Add Dog");
        return "dogs/add";
    }


    @PostMapping("/add")
    public String saveNewDog(@Valid @ModelAttribute("dog") Dog dog, BindingResult result, Model model) {
    if(result.hasErrors()){
        //model.addAttribute("dog", dog);
        return "dogs/add";
    }

        dogService.saveDog(dog);
        return "redirect:/dog/list";
    }

    // Update in crUd
    @GetMapping("/update/{id}")
    public String editDogProfile(@PathVariable("id") Integer id, Model model) {
        try {
            Dog dog = dogService.findDogId(id);
            model.addAttribute("dog", dog);
            model.addAttribute("pageTitle", "Edit Dog Profile(ID: " + id + ")");
            return "dogs/add";
        } catch(dogNotFoundException e) {
            return "redirect:/dog/list";
        }
    }

    /*@GetMapping("/update/{id}")
    public String sendUpdatedDogProfile(@PathVariable("id") Integer id, @RequestBody Dog dog, Model model) throws dogNotFoundException {
        Dog updatedDog = dogService.findDogId(id);
        updatedDog.setId(dog.getId());
        updatedDog.setAge(dog.getAge());
        updatedDog.setColor(dog.getColor());
        updatedDog.setBreed(dog.getBreed());
        updatedDog.setName(dog.getName());
        updatedDog.setNatureDesc(dog.getNatureDesc());
        updatedDog.setPhotoUrl(dog.getPhotoUrl());
        model.addAttribute("dog",);
        model.addAttribute("pageTitle", "Edit Dog Profile(ID: " + id + ")");

        return "dogs/add";
    }*/



    //Delete in CRUD-Get Mapping
    @GetMapping("remove/{id}")
    public String removeDog(@PathVariable("id") Integer id, Model model) {
        dogService.removeDog(id);
        return "redirect:/dog/list";
    }

}
