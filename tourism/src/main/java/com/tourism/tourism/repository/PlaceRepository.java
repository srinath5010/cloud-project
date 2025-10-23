package com.tourism.tourism.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourism.tourism.entity.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {}
