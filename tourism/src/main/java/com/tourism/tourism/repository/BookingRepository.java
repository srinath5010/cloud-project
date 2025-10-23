package com.tourism.tourism.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourism.tourism.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {}
