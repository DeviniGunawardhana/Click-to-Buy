package com.Shopping.onlineshopping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {

    private int reviewId;
    private String  customerName;
    private String  comment;
    private String customerEmail;
}
