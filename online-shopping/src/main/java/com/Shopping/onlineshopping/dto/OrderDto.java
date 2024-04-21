package com.Shopping.onlineshopping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    private int orderId;
    private Date date;
    private Double amount;
    private boolean activeState;
}
