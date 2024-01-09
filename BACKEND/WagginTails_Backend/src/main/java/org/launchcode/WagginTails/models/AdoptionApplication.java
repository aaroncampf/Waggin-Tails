package org.launchcode.WagginTails.models;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.Email;

@Entity
public class AdoptionApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @Valid
    @NotNull
    private Dog dog;

    @NotEmpty(message ="Please enter Name")
    private String fullName;


    @Email(message="Please provide a valid email address")
    @Pattern(regexp="[A-Za-z0-9._%-+]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}")
    @NotEmpty(message ="Please enter Name")
    private String email;


    @NotEmpty(message = "Please enter phone number")
    private String phoneNumber;


    @NotEmpty(message = "Please enter Street address")
    private String streetAddress;

    @NotEmpty(message = "Please enter City")
    private String city;


    @NotEmpty(message = "Please enter State ")
    private String state;

    @NotEmpty(message = "Please enter Zipcode ")
    private String zipcode;



    private String homeOwnershipType;

    @NotEmpty(message = "Please enter number of adults living in your space. ")
    private Integer totalAdults;

    @NotEmpty(message = "Please enter number of children living in your space. ")
    private Integer totalChildren;

    @NotEmpty(message = "Please enter dog staying place when no one is home. ")
    private String dogStayWhenNobodyHome;


    @NotEmpty(message = "Please enter approximate hours for which dog will stay alone. ")
    private Integer dogStayAloneHours;


    @NotEmpty(message = "Please enter place where the dog will sleep. ")
    private String dogSleepingPlace;

    @NotEmpty(message = "Please enter financial question. ")
    private boolean isFinanciallyPrepared;

    private boolean isApproved= false;

    public AdoptionApplication(String fullName, String email, String phoneNumber, String streetAddress, String city, String state, String zipcode, String homeOwnershipType, Integer totalAdults, Integer totalChildren, String dogStayWhenNobodyHome, Integer dogStayAloneHours, String dogSleepingPlace, boolean isFinanciallyPrepared) {
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.homeOwnershipType = homeOwnershipType;
        this.totalAdults = totalAdults;
        this.totalChildren = totalChildren;
        this.dogStayWhenNobodyHome = dogStayWhenNobodyHome;
        this.dogStayAloneHours = dogStayAloneHours;
        this.dogSleepingPlace = dogSleepingPlace;
        this.isFinanciallyPrepared = isFinanciallyPrepared;
        this.isApproved = isApproved;
    }

    public AdoptionApplication() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getHomeOwnershipType() {
        return homeOwnershipType;
    }

    public void setHomeOwnershipType(String homeOwnershipType) {
        this.homeOwnershipType = homeOwnershipType;
    }

    public Integer getTotalAdults() {
        return totalAdults;
    }

    public void setTotalAdults(Integer totalAdults) {
        this.totalAdults = totalAdults;
    }

    public Integer getTotalChildren() {
        return totalChildren;
    }

    public void setTotalChildren(Integer totalChildren) {
        this.totalChildren = totalChildren;
    }

    public String getDogStayWhenNobodyHome() {
        return dogStayWhenNobodyHome;
    }

    public void setDogStayWhenNobodyHome(String dogStayWhenNobodyHome) {
        this.dogStayWhenNobodyHome = dogStayWhenNobodyHome;
    }

    public Integer getDogStayAloneHours() {
        return dogStayAloneHours;
    }

    public void setDogStayAloneHours(Integer dogStayAloneHours) {
        this.dogStayAloneHours = dogStayAloneHours;
    }

    public String getDogSleepingPlace() {
        return dogSleepingPlace;
    }

    public void setDogSleepingPlace(String dogSleepingPlace) {
        this.dogSleepingPlace = dogSleepingPlace;
    }

    public boolean isFinanciallyPrepared() {
        return isFinanciallyPrepared;
    }

    public void setFinanciallyPrepared(boolean financiallyPrepared) {
        isFinanciallyPrepared = financiallyPrepared;
    }

    public boolean isApproved() {
        return isApproved;
    }

    public void setAdopted(boolean adopted) {
        isApproved = adopted;
    }
}
