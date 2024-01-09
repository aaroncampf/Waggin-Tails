package org.launchcode.WagginTails.models.data;

import org.launchcode.WagginTails.models.AdoptionApplication;
import org.launchcode.WagginTails.models.Dog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdoptionApplicationRepository extends CrudRepository<AdoptionApplication, Integer> {
    List<AdoptionApplication> findAll();
}
