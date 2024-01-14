package org.launchcode.WagginTails.models.data;

import org.launchcode.WagginTails.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



//Userrepository extends CrudRepository<userclass, primary key value type
@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    User findByUsername(String username);
}
