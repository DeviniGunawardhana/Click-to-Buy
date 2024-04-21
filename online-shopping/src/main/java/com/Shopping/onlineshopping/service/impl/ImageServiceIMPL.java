package com.Shopping.onlineshopping.service.impl;

import com.Shopping.onlineshopping.repo.ImageRepo;
import com.Shopping.onlineshopping.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceIMPL implements ImageService {

    @Autowired
    private ImageRepo imageRepo;
}
