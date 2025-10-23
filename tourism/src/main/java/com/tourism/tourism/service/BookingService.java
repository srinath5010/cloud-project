package com.tourism.tourism.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tourism.tourism.entity.Booking;
import com.tourism.tourism.entity.Place;
import com.tourism.tourism.entity.User;
import com.tourism.tourism.repository.BookingRepository;
import com.tourism.tourism.repository.PlaceRepository;
import com.tourism.tourism.repository.UserRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepo;
    private final UserRepository userRepo;
    private final PlaceRepository placeRepo;

    public BookingService(BookingRepository bookingRepo, UserRepository userRepo, PlaceRepository placeRepo) {
        this.bookingRepo = bookingRepo;
        this.userRepo = userRepo;
        this.placeRepo = placeRepo;
    }

    public List<Booking> getAllBookings() {
        return bookingRepo.findAll();
    }

    public Booking createBooking(Booking booking) {
        // Fetch User and Place from IDs
        Long userId = booking.getUser() != null ? booking.getUser().getId() : null;
        Long placeId = booking.getPlace() != null ? booking.getPlace().getId() : null;

        if (userId == null || placeId == null) {
            throw new RuntimeException("User ID or Place ID missing");
        }

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Place place = placeRepo.findById(placeId)
                .orElseThrow(() -> new RuntimeException("Place not found"));

        booking.setUser(user);
        booking.setPlace(place);

        return bookingRepo.save(booking);
    }
}
