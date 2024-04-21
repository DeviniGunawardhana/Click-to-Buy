package com.Shopping.onlineshopping.service;

import com.Shopping.onlineshopping.dto.EmployeeDto;
import com.Shopping.onlineshopping.dto.LoginDTO;
import com.Shopping.onlineshopping.dto.request.SaveEmployeeDTO;
import com.Shopping.onlineshopping.dto.request.UpdateEmployeeDTO;
import com.Shopping.onlineshopping.dto.response.LoginMessage;
import com.Shopping.onlineshopping.dto.response.LoginResponse;

import java.util.List;

public interface EmployeeService {

   

    SaveEmployeeDTO saveEmployee(SaveEmployeeDTO saveEmployee);

    UpdateEmployeeDTO updateEmployee(String name);


    List<EmployeeDto> gelAllEmployee();

    List<EmployeeDto> gelAllEmployee1ecking();

    EmployeeDto getEmployeeById(int employeeId);


    EmployeeDto update(EmployeeDto employeeDto);

    String deleteEmployee(int employeeId);

    LoginResponse loginEmployee(LoginDTO loginDTO);

    Long countAllCustomer();
}
