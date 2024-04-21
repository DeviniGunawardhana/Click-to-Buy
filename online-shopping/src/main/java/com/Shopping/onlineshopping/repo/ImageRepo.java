package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepo extends JpaRepository<Image,Long> {
    Optional<Image> findByName(String name);
}
