package org.launchcode.WagginTails.controllers.api;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.launchcode.WagginTails.models.AdoptionApplication;
import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.User;
import org.launchcode.WagginTails.models.data.AdoptionApplicationRepository;
import org.launchcode.WagginTails.models.data.UserRepository;
import org.launchcode.WagginTails.models.dto.LoginFormDto;
import org.launchcode.WagginTails.models.dto.RegistrationDto;
import org.launchcode.WagginTails.service.AdoptionApplicationService;
import org.launchcode.WagginTails.service.DogService;
import org.launchcode.WagginTails.service.dogNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
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

//    @PostMapping("/user")
//    User newUser(@RequestBody User newUser) {
//
//        return userRepository.save(newUser);
//    }
    @PostMapping("/user")
    public User processRegistrationForm(@ModelAttribute @Valid RegistrationDto registrationDto, Errors errors, HttpServletRequest request) {


        //User existingUser = userRepository.findByUsername(registrationDto.getUsername());
        User existingUser = userRepository.findByUsername(registrationDto.getUsername());

        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyExists", "A User with that username already exists");
        }

        String password = registrationDto.getPassword();
        String verifyPassword = registrationDto.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");

        }
        User newUser = new User(registrationDto.getUsername(), registrationDto.getPassword());
        return userRepository.save(newUser);
        //setUserInSession(request.getSession(), newUser);
    }

    @PostMapping("/login")
    public User processLoginForm(@ModelAttribute @Valid LoginFormDto loginFormDto,
                                 Errors errors,
                                 HttpServletRequest request) {

//        // Send user back to form if errors are found
//        if (errors.hasErrors()) {
//            return "login";
//        }

        // Look up user in database using username they provided in the form
        User theUser = userRepository.findByUsername(loginFormDto.getUsername());

        // Get the password the user supplied in the form
        String password = loginFormDto.getPassword();

        // Send user back to form if username does not exist OR if password hash doesn't match
        // "Security through obscurity" — don't reveal which one was the problem
        if (theUser == null || !theUser.isMatchingPassword(password)) {
            errors.rejectValue(
                    "password",
                    "login.invalid",
                    "Credentials invalid. Please try again with correct username/password combination."
            );
        }
        //User theUser = userRepository.findByUsername(loginFormDto.getUsername());

        return userRepository.save(theUser);
    }
    @GetMapping("/list")
    List<Dog> listAllDogs(Model model) {
        //List<Dog> dogs = dogService.getAllDogs();
        //model.addAttribute("dogs", dogs);
        //return "dogs/list";
        return dogService.getAllDogs();
    }

    @GetMapping("/dog/{id}")
    Dog getDogById(@PathVariable("id") Integer id, Model model) throws dogNotFoundException {
        //List<Dog> dogs = dogService.getAllDogs();
        //model.addAttribute("dogs", dogs);
        //return "dogs/list";;o
        return  dogService.findDogId(id);
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
