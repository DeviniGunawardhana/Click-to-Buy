package com.Shopping.onlineshopping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginAdminDTO {


    private String adminPassword;
    private String adminEmail;
}
