package org.launchcode.WagginTails.service.impl;

import org.launchcode.WagginTails.models.AdoptionApplication;
import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.data.AdoptionApplicationRepository;
import org.launchcode.WagginTails.models.data.DogRepository;
import org.launchcode.WagginTails.service.AdoptionApplicationService;
import org.launchcode.WagginTails.service.applicationNotFoundException;
import org.launchcode.WagginTails.service.dogNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionApplicationImpl implements AdoptionApplicationService {

    @Autowired
    private AdoptionApplicationRepository applicationRepository;

    @Override
    public AdoptionApplication saveApplication(AdoptionApplication application) {
        return applicationRepository.save(application);
    }

    @Override
    public List<AdoptionApplication> getAllApplications() {
        return applicationRepository.findAll();
    }

    @Override
    public void removeAdoptionApplication(Integer id) {
            applicationRepository.deleteById(id);
    }

    @Override
    public AdoptionApplication findApplicationById(Integer id) throws applicationNotFoundException {
        Optional<AdoptionApplication> result = applicationRepository.findById(id);
        if (result.isPresent()) {
            return result.get();
        }
        throw new applicationNotFoundException("Could not find adoption application with ID" + id);
    }

}

