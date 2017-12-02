package com.javacodegeeks.examples.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    @GetMapping(value = "/index/{id}")
    public String homepage(@PathVariable String id){
        return "index " + id;
    }
}
