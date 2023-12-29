package org.launchcode.WagginTails.service.impl;

import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.data.DogRepository;
import org.launchcode.WagginTails.service.DogService;
import org.launchcode.WagginTails.service.dogNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DogServiceImpl implements DogService {

    // autowired dog repo rto use crud methods
    @Autowired
    private DogRepository dogRepository;

    // override method from dog service, code for names in DogService
    @Override
    public Dog saveDog(Dog dog) {
        return dogRepository.save(dog);
    }

    // override method from dog service, code for names in DogService

    @Override
    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }





    @Override
    public void removeDog(Integer id){
        dogRepository.deleteById(id);
    }

    @Override
    public Dog findDogId(Integer id) throws dogNotFoundException {
        Optional<Dog> result = dogRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        }
        throw new dogNotFoundException("Could not find user with ID" + id);
    }
        /*Dog dogProfile = dogRepository.findById(id).get();
        return dogProfile.setId(id);*/



}
