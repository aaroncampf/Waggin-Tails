package org.launchcode.WagginTails.service;

public class applicationNotFoundException extends Throwable{
    public applicationNotFoundException(String message) {
        super(message);
    }
}
