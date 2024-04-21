package com.Shopping.onlineshopping.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RequestOrderDetailsSaveDTO {

    private String itemName;
    private double quantity;
    private Double amount;
    private int items;

}
