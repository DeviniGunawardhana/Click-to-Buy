package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Customer;
import com.Shopping.onlineshopping.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

}
