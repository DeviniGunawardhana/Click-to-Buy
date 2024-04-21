package com.Shopping.onlineshopping.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestSaveCustomerDTO {
    private String customerName;
    private String customerPassword;
    private String customerEmail;

}
