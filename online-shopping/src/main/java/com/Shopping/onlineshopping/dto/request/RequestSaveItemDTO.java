package com.Shopping.onlineshopping.dto.request;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestSaveItemDTO {

    private String itemName;
    private String shopName;
    private int employeeId;
    private String itemType;
    private double price;
    private Date date;
    private int quantity;
    private String description;
    private String image;

}
