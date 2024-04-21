package com.Shopping.onlineshopping.Util.mappers;

import com.Shopping.onlineshopping.dto.ItemDTO;
import com.Shopping.onlineshopping.entity.Item;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemMapper {

    List<ItemDTO> entityDtoToResponseDto(List<Item>items);

}
