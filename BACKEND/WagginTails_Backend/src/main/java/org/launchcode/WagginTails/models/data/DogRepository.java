package org.launchcode.WagginTails.models.data;


import org.launchcode.WagginTails.models.Dog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogRepository extends CrudRepository<Dog, Integer> {
    List<Dog> findAll();

}
