package org.launchcode.WagginTails.service.impl;

import org.launchcode.WagginTails.models.data.UserRepository;
import org.launchcode.WagginTails.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public void removeUser(Integer id) {
        userRepository.deleteById(id);
    }
}
