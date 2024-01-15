package org.launchcode.WagginTails.controllers;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.WagginTails.models.User;
import org.launchcode.WagginTails.models.data.UserRepository;
import org.launchcode.WagginTails.models.dto.LoginFormDto;
import org.launchcode.WagginTails.models.dto.RegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Optional;

@Controller
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    //create key value pair
    //key user, value id
    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }
        Optional<User> userOpt = userRepository.findById(userId);

        if (userOpt.isEmpty()) {
            return null;
        }
        return userOpt.get();
    }

    @GetMapping("/register")
    public String displayRegForm(Model model, HttpSession session) {
        model.addAttribute(new RegistrationDto());
        model.addAttribute("pageTitle", "Add User");
        model.addAttribute("loogedIn", session.getAttribute("user") != null);
        return "register";
    }

    @PostMapping("/register")
    public String processRegistrationForm(@ModelAttribute @Valid RegistrationDto registrationDto, Errors errors, HttpServletRequest request) {
        if (errors.hasErrors()) {
            return "register";
        }

        //User existingUser = userRepository.findByUsername(registrationDto.getUsername());
        User existingUser = userRepository.findByUsername(registrationDto.getUsername());

        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyExists", "A User with that username already exists");
            return "register";
        }

        String password = registrationDto.getPassword();
        String verifyPassword = registrationDto.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            return "register";

        }
        User newUser = new User(registrationDto.getUsername(), registrationDto.getPassword());
         userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);
        return "redirect:/login";

    }

    @GetMapping("/login")
    public String displayLoginForm(Model model, HttpSession session) {
        model.addAttribute(new LoginFormDto()); // "loginFormDTO" variable implicit
        model.addAttribute("loggedIn", session.getAttribute("user") != null);
        return "login";
    }

    @PostMapping("/login")
    public String processLoginForm(@ModelAttribute @Valid LoginFormDto loginFormDto,
                                   Errors errors,
                                   HttpServletRequest request) {

        // Send user back to form if errors are found
        if (errors.hasErrors()) {
            return "login";
        }

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
            return "login";
        }
        setUserInSession(request.getSession(), theUser);
        return "redirect:/home";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
}
