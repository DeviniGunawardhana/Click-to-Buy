package com.Shopping.onlineshopping.service;

import com.Shopping.onlineshopping.dto.OrderDto;
import com.Shopping.onlineshopping.dto.request.RequestOrderSaveDTO;

public interface OrderService {



    RequestOrderSaveDTO saveItem(RequestOrderSaveDTO requestOrderSaveDTO);

    Long countAllOrder();

    void createTransaction(Double amount);
}
