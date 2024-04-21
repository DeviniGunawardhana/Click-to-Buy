package com.Shopping.onlineshopping.service;

import com.Shopping.onlineshopping.dto.ItemDTO;
import com.Shopping.onlineshopping.dto.request.RequestSaveItemDTO;

import java.util.List;

public interface ItemService {


    RequestSaveItemDTO saveItem(RequestSaveItemDTO requestSaveItemDTO);


    List<ItemDTO> getItemByName(String itemType);

    List<ItemDTO> getNotActiveItemByName(String name);

    List<ItemDTO> getAllItem();


    ItemDTO getById(int itemId);


    List<ItemDTO> getItemByEmployee(int employeeId);

    String deleteItem(int itemId);

    Long countAllItem();
}
