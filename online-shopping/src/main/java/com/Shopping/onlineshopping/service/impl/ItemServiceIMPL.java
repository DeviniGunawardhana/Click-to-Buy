package com.Shopping.onlineshopping.service.impl;

import com.Shopping.onlineshopping.Util.mappers.ItemMapper;
import com.Shopping.onlineshopping.dto.ItemDTO;
import com.Shopping.onlineshopping.dto.request.RequestSaveItemDTO;
import com.Shopping.onlineshopping.entity.Item;
import com.Shopping.onlineshopping.repo.ItemRepo;
import com.Shopping.onlineshopping.service.ItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceIMPL implements ItemService {
    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ItemMapper itemMapper;

    @Override
    public RequestSaveItemDTO saveItem(RequestSaveItemDTO requestSaveItemDTO) {
        Item item = modelMapper.map(requestSaveItemDTO,Item.class);
        item.setActiveState(true);
        if(!itemRepo.existsById(item.getItemId())){
            itemRepo.save(item);
            return requestSaveItemDTO;
        }else {
            throw new RuntimeException("error message");
        }

    }

    @Override
    public List<ItemDTO> getItemByName(String itemType) {
        boolean b =true;
        List<Item> items = itemRepo.findAllByItemTypeEqualsAndActiveStateEquals(itemType,b);

        if(items.size()>0){
            List<ItemDTO> itemDTOList= modelMapper.map(items,new TypeToken<List<ItemDTO>>(){}.getType());

            return itemDTOList;
        }else {
            throw new RuntimeException("not Found");
        }


    }

    @Override
    public List<ItemDTO> getNotActiveItemByName(String name) {

        List<Item> items = itemRepo.findAllByItemNameEqualsAndActiveStateIsFalse(name);

        if(items.size()>0){
            List<ItemDTO> itemDTOList= itemMapper.entityDtoToResponseDto(items);
            return itemDTOList;
        }else {
            throw new RuntimeException("not Found");
        }

        
    }

    @Override
    public List<ItemDTO> getAllItem() {
        List<Item> items = itemRepo.findAll();

        List<ItemDTO> itemDTOList = modelMapper.map(items,new TypeToken<List<ItemDTO>>(){}.getType());
        return itemDTOList;
    }

    @Override
    public ItemDTO getById(int id) {

            Item item = itemRepo.getById(id);
            ItemDTO itemDTO = modelMapper.map(item, ItemDTO.class);
            return itemDTO;

    }

    @Override
    public List<ItemDTO> getItemByEmployee(int employeeId) {
        List<Item> items = itemRepo.findAllByEmployeeIdEquals(employeeId);

        if(items.size()>0){
            List<ItemDTO> itemDTOList= itemMapper.entityDtoToResponseDto(items);
            return itemDTOList;
        }else {
            throw new RuntimeException("not Found");
        }

    }

    @Override
    public String deleteItem(int itemId) {
        if(itemRepo.existsById(itemId)){
            itemRepo.deleteById(itemId);
            return  itemId+ " delete successfully";
        }else {
            throw new   RuntimeException ("No customer Found ");
        }

    }

    @Override
    public Long countAllItem() {
        return itemRepo.count();
    }




}
