package org.launchcode.WagginTails.service;

import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.data.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


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
}
