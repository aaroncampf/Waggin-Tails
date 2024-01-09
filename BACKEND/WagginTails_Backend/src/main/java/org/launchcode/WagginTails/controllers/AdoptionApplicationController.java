package org.launchcode.WagginTails.controllers;

import jakarta.validation.Valid;
import org.launchcode.WagginTails.models.AdoptionApplication;
import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.service.AdoptionApplicationService;
import org.launchcode.WagginTails.service.applicationNotFoundException;
import org.launchcode.WagginTails.service.dogNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/adoptionApplication")
public class AdoptionApplicationController {

    @Autowired
    private AdoptionApplicationService adoptionApplicationService;

    @GetMapping("/list")
    public String listAllDogs(Model model) {
        List<AdoptionApplication> allApplicationsList = adoptionApplicationService.getAllApplications();
        model.addAttribute("applications", allApplicationsList);
        return "applications/list";
    }

    @PostMapping("/addApplication")
    public String saveNewApplication(@Valid @ModelAttribute("application") AdoptionApplication application, BindingResult result, Model model) {
        if(result.hasErrors()){
            //model.addAttribute("dog", dog);
            return "application/add";
        }

        adoptionApplicationService.saveApplication(application);
        return "redirect:/applications/list";
    }

    @GetMapping("/update/{id}")
    public String editAdoptionApplication(@PathVariable("id") Integer id, Model model) {
        try {
            AdoptionApplication application = adoptionApplicationService.findApplicationById(id);
            model.addAttribute("application", application);
            model.addAttribute("pageTitle", "Edit Adoption Application (ID: " + id + ")");
            return "application/add";
        } catch(  applicationNotFoundException e) {
            return "redirect:/applications/list";
        }
    }



    //Delete in CRUD-Get Mapping
    @GetMapping("removeApplication/{id}")
    public String removeApplication(@PathVariable("id") Integer id, Model model) {
        adoptionApplicationService.removeAdoptionApplication(id);
        return "redirect:/applications/list";
    }


}
