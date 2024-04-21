package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/email")
public class EmailController {

    @Autowired
    private EmailSenderService service;



    @PostMapping(path = "/sendMail")
    public void triggerMail() throws MessagingException {

        service.sendEmailWithAttachment("dsandali290@gmail.com",
                "This is Email Body with Attachment...",
                "This email has attachment",
                "C:\\Users\\shabb\\Pictures\\c.gif");

    }
}
