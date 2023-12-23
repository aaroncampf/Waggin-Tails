package org.launchcode.WagginTails.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Entity
public class Dog {

    // need to find datatype to add images ?

    // created id for database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // private string name
    @NotEmpty(message ="Please enter Name")
    private String name;

    @NotEmpty(message= "Nature Description should not be blank")
    private String natureDesc;

    @NotEmpty(message= "Color should not be blank")
    private String color;
    @NotEmpty(message = "Breed should not be blank")
    private String breed;


    @NotNull(message = "Age should not be blank")
    private int age;

    @NotEmpty(message = "Please enter dog profile photo URL")
    private String dogProfilePhotoUrl;


    @NotEmpty(message = "Please enter dog photo-1")
    private String photoOneUrl;

    @NotEmpty(message = "Please enter photo-2")
    private String photoTwoUrl;


    public Dog(int id, String name, String natureDesc, String color, String breed, int age, String dogProfilePhotoUrl, String photoOneUrl, String photoTwoUrl) {
        this.id = id;
        this.name = name;
        this.natureDesc = natureDesc;
        this.color = color;
        this.breed = breed;
        this.age = age;
        this.dogProfilePhotoUrl = dogProfilePhotoUrl;
        this.photoOneUrl = photoOneUrl;
        this.photoTwoUrl = photoTwoUrl;
    }

    public Dog() {

    }





    public int getId() {
        return id;
    }

    public Dog setId(int id) {
        this.id = id;
        return null;
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

    public void setColor() {
        this.color = color;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDogProfilePhotoUrl() {
        return dogProfilePhotoUrl;
    }

    public void setDogProfilePhotoUrl(String dogProfilePhotoUrl) {
        this.dogProfilePhotoUrl = dogProfilePhotoUrl;
    }

    public String getPhotoOneUrl() {
        return photoOneUrl;
    }

    public void setPhotoOneUrl(String photoOneUrl) {
        this.photoOneUrl = photoOneUrl;
    }

    public String getPhotoTwoUrl() {
        return photoTwoUrl;
    }

    public void setPhotoTwoUrl(String photoTwoUrl) {
        this.photoTwoUrl = photoTwoUrl;
    }
}
