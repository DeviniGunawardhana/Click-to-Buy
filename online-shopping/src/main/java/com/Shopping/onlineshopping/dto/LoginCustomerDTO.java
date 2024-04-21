package com.Shopping.onlineshopping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginCustomerDTO {
    private int customerID;
    private String customerName;
    private String customerPassword;
    private String customerEmail;
}
