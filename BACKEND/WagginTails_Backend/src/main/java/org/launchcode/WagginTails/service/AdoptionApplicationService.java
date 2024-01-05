package org.launchcode.WagginTails.service;

import org.launchcode.WagginTails.models.AdoptionApplication;


import java.util.List;

public interface AdoptionApplicationService {

    public AdoptionApplication saveApplication(AdoptionApplication application);


    // method that list all dogs saved in database. Call List on Dog model,method name; getAll Dogs! *Had to put     List<Dog> findAll(); in DogRepository for method to work
    public List<AdoptionApplication> getAllApplications();



    // method from crd repo that removes if
    void removeAdoptionApplication(Integer id);

    public AdoptionApplication findApplicationById(Integer id) throws applicationNotFoundException;
}
