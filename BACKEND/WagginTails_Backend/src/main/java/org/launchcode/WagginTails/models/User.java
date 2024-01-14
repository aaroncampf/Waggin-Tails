package org.launchcode.WagginTails.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


//user model class to define variable needs for user class, login
@Entity
public class User {


    // ID annonation, generated value annotation to generated and increase id per user entry
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Email
    private String email;

    @NotEmpty(message = "Must Enter Username")
    @NotNull(message = "Must Enter Username")
    @Size(min = 3, max = 16)
    private String username;

    @NotEmpty(message = "Must Enter Password")
    @NotNull(message = "Must Enter Password")
    @Size(min = 3, max = 16)
    private String pwHash;


    // empty user tostring
    public User() {
    }

    // may need to refactor code for to string
    public User(String email,String username, String password) {
                this.id = id;
                this.email = email;
                this.username = username;
                this.pwHash = encoder.encode(password);

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public String getPwHash() {
//        return pwHash;
//    }
//
//    public void setPwHash(String pwHash) {
//        this.pwHash = pwHash;
//    }

    public String getUsername() {
        return username;
    }

   public static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean isMatchingPassword(String password){
        return encoder.matches(password, pwHash);
    }
}
