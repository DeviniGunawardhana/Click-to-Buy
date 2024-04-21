package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.Util.ImageUtility;
import com.Shopping.onlineshopping.entity.Image;
import com.Shopping.onlineshopping.repo.ImageRepo;
import com.Shopping.onlineshopping.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/image")

public class ImageController {
    @Autowired
    private ImageService imageService;

    @Autowired
    private ImageRepo imageRepo;

    @PostMapping("/upload/image")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file)
            throws IOException{
        imageRepo.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .picByte(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{name}"})
    public Image getImageDetails(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepo.findByName(name);

        return Image.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .picByte(ImageUtility.decompressImage(dbImage.get().getPicByte())).build();
    }
    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepo.findByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getPicByte()));
    }

}
