package com.Shopping.onlineshopping.Util.mappers;

import com.Shopping.onlineshopping.dto.CustomerDto;
import com.Shopping.onlineshopping.entity.Customer;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    List<CustomerDto> pageToDto(Page<Customer> customer);
}
