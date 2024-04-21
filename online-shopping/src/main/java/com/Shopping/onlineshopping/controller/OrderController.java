package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.dto.OrderDto;
import com.Shopping.onlineshopping.dto.request.RequestOrderSaveDTO;
import com.Shopping.onlineshopping.dto.request.RequestSaveItemDTO;
import com.Shopping.onlineshopping.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/order")
@CrossOrigin
public class OrderController {

    @Autowired
    public OrderService orderService;

    @PostMapping(path = "/save")
    public RequestOrderSaveDTO saveItem(@RequestBody RequestOrderSaveDTO requestOrderSaveDTO){
        return  orderService.saveItem(requestOrderSaveDTO);

    }

    @GetMapping("/count")
    public Long countAllOrder(){
        Long id= orderService.countAllOrder();
        return id;

    }
    @GetMapping({"/createTransaction/{amount}"})
    public void createTransaction(@PathVariable(name = "amount") Double amount){
         orderService.createTransaction(amount);
         return;
    }
}
