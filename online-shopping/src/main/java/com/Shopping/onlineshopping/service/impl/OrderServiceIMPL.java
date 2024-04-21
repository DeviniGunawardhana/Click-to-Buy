package com.Shopping.onlineshopping.service.impl;

import com.Shopping.onlineshopping.dto.OrderDto;
import com.Shopping.onlineshopping.dto.request.RequestOrderSaveDTO;
import com.Shopping.onlineshopping.entity.Orders;
import com.Shopping.onlineshopping.entity.OrderDetails;
import com.Shopping.onlineshopping.repo.CustomerRepo;
import com.Shopping.onlineshopping.repo.ItemRepo;
import com.Shopping.onlineshopping.repo.OrderDetailsRepo;
import com.Shopping.onlineshopping.repo.OrderRepo;
import com.Shopping.onlineshopping.service.OrderService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class OrderServiceIMPL implements OrderService {

    private static final String KEY="";

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private OrderDetailsRepo orderDetailsRepo;

    @Autowired
    private ItemRepo itemRepo;


    @Override
    @Transactional
    public RequestOrderSaveDTO saveItem(RequestOrderSaveDTO requestOrderSaveDTO) {
        Orders order = new Orders(
                customerRepo.getById(requestOrderSaveDTO.getCustomer()),
                requestOrderSaveDTO.getDate(),
                requestOrderSaveDTO.getTotal()

        );
        orderRepo.save(order);

        if(orderRepo.existsById(order.getOrderId())){
            List<OrderDetails> orderDetails = modelMapper.
                    map(requestOrderSaveDTO.getOrderDetails(), new TypeToken<List<OrderDetails>>() {
                    }.getType());
            for (int i=0 ; i<orderDetails.size();i++){
                orderDetails.get(i).setOrders(order);
                orderDetails.get(i).setItems(itemRepo.getById(requestOrderSaveDTO.getOrderDetails().get(i).getItems()));
            }

            if(orderDetails.size()>0){
                orderDetailsRepo.saveAll(orderDetails);
            }
            return null;
        }
        return null;

    }

    @Override
    public Long countAllOrder() {
        return orderRepo.count();
    }

    @Override
    public void createTransaction(Double amount) {

    }
}
