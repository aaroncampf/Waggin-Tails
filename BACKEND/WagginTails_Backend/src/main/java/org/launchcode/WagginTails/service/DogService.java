package org.launchcode.WagginTails.service;


import org.launchcode.WagginTails.models.Dog;

import java.util.List;

// dog services has crud methods to pass into controllers(Abstract interface to pass in crud methods
public interface DogService {


    // method whe called will save instance of dog model. have to call saveDog in dogcontroller( dogService.saveDog(dog)
    // Think of it as the names of the methods that dogserviceimpl needs to create
    public Dog saveDog(Dog dog);


    // method that list all dogs saved in database. Call List on Dog model,method name; getAll Dogs! *Had to put     List<Dog> findAll(); in DogRepository for method to work
    public List<Dog>getAllDogs();



    // method from crd repo that removes if
   void removeDog(Integer id);

    public Dog findDogId(Integer id) throws dogNotFoundException;
}
