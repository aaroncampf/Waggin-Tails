package org.launchcode.WagginTails.models.data;

import org.launchcode.WagginTails.models.UserInformation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<UserInformation,Integer> {
}
