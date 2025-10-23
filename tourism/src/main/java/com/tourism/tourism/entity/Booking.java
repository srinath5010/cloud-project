package com.tourism.tourism.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")  // Map to user_id column
    private User user;

    @ManyToOne
    @JoinColumn(name = "place_id") // Map to place_id column
    private Place place;

    private LocalDate bookingDate;
    private int numPeople;

    public Booking() {}

    public Booking(User user, Place place, LocalDate bookingDate, int numPeople) {
        this.user = user;
        this.place = place;
        this.bookingDate = bookingDate;
        this.numPeople = numPeople;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Place getPlace() { return place; }
    public void setPlace(Place place) { this.place = place; }

    public LocalDate getBookingDate() { return bookingDate; }
    public void setBookingDate(LocalDate bookingDate) { this.bookingDate = bookingDate; }

    public int getNumPeople() { return numPeople; }
    public void setNumPeople(int numPeople) { this.numPeople = numPeople; }
}
