package com.Shopping.onlineshopping.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "review")
public class Review {

    @Id
    @Column(name = "review_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reviewId;

    @Column(name = "customer_name", length = 100 , nullable = false)
    private String  customerName;

    @Column(name = "comment", length = 100 , nullable = false)
    private String  comment;

    @Column(name = "customer_email", length = 45)
    private String customerEmail;
}
