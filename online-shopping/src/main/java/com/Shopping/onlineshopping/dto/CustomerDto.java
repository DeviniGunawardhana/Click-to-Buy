package com.Shopping.onlineshopping.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDto {

    private int customerId;
    private String customerName;
    private String customerPassword;
    private String customerEmail;
    private boolean activeState;

}
