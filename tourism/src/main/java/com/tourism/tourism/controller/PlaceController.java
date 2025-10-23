package com.tourism.tourism.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tourism.tourism.entity.Place;
import com.tourism.tourism.service.PlaceService;

@RestController
@RequestMapping("/api/places")
@CrossOrigin(origins = "http://localhost:5173")
public class PlaceController {

    private final PlaceService service;

    public PlaceController(PlaceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Place> getPlaces() {
        return service.getAllPlaces();
    }
}
