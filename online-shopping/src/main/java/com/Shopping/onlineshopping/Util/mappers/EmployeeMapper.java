package com.Shopping.onlineshopping.Util.mappers;

import com.Shopping.onlineshopping.dto.EmployeeDto;
import com.Shopping.onlineshopping.entity.Employee;
import com.Shopping.onlineshopping.entity.Item;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EmployeeMapper {



    List<EmployeeDto> entityListToDtoList(List<Employee> employees);
}
