package org.launchcode.WagginTails.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Dog {

    // need to find datatype to add images ?

    // created id for database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // private string name
    private String name;
    private String natureDesc;
    private String color;
    private String breed;
    private Long age;

    private String photoUrl;
    public Dog() {

    }

    public Dog(int id, String name, String natureDesc, String color, String breed, Long age, String photoUrl) {
        this.id = id;
        this.name = name;
        this.natureDesc = natureDesc;
        this.color = color;
        this.breed = breed;
        this.age = age;
        this.photoUrl = photoUrl;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }




    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getNatureDesc() {
        return natureDesc;
    }

    public void setNatureDesc(String natureDesc) {
        this.natureDesc = natureDesc;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }


}
