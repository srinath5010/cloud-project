package com.tourism.tourism.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tourism.tourism.entity.Place;
import com.tourism.tourism.repository.PlaceRepository;

@Service
public class PlaceService {

    private final PlaceRepository repo;

    public PlaceService(PlaceRepository repo) {
        this.repo = repo;
    }

    public List<Place> getAllPlaces() {
        return repo.findAll();
    }
}
