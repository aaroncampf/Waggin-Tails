package org.launchcode.WagginTails.controllers;


import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.service.DogService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class HomeController {

   // list nav bar
@GetMapping("/home")
    public String welcomePage(){
    return "welcome";
}

}
