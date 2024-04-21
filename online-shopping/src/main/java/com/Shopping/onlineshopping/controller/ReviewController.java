package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.dto.ReviewDTO;
import com.Shopping.onlineshopping.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/review")

public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping (path = "/save")
    public ReviewDTO saveCustomer(@RequestBody ReviewDTO reviewDTO){
        reviewService.saveCustomer(reviewDTO);
        return reviewDTO;
    }

}
