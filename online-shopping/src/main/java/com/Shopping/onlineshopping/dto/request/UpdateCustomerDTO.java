package com.Shopping.onlineshopping.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UpdateCustomerDTO {

    private int customerId;
    private String customerName;
    private String customerPassword;
    private String customerEmail;
}
