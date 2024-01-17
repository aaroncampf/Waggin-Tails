package org.launchcode.WagginTails.models.data;

import org.launchcode.WagginTails.models.Dog;
import org.launchcode.WagginTails.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


//Userrepository extends CrudRepository<userclass, primary key value type
@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    User findByUsername(String username);

    List<User> findAll();

}
