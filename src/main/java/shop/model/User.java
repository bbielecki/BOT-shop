package shop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class User {

    @NotNull
    @Id
    private int id;
    @NotNull
    private String login;
    @NotNull
    private String password;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String address;

    public User() {

    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    //region BOILERPLATE
    public int getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getAddress() {
        return address;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    //endregion
}
