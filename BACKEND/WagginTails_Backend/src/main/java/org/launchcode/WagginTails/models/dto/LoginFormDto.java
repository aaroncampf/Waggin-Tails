package org.launchcode.WagginTails.models.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginFormDto {

    @NotEmpty(message = "Must Enter Username")
    @NotNull(message = "Must Enter Username")
    @Size(min = 3, max = 16)
    private String username;

    @NotEmpty(message = "Must Enter Password")
    @NotNull(message = "Must Enter Password")
    @Size(min = 3, max = 16, message = "Password must be between 3-16 characters")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
