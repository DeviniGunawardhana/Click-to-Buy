package com.Shopping.onlineshopping.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseSaveCustomerDTO {
    private String customerName;
    private String customerPassword;
    private String customerEmail;
}
