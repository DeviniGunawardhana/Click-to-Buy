package com.Shopping.onlineshopping.service.impl;

import com.Shopping.onlineshopping.Util.mappers.EmployeeMapper;
import com.Shopping.onlineshopping.dto.EmployeeDto;
import com.Shopping.onlineshopping.dto.ItemDTO;
import com.Shopping.onlineshopping.dto.LoginDTO;
import com.Shopping.onlineshopping.dto.request.SaveEmployeeDTO;
import com.Shopping.onlineshopping.dto.request.UpdateEmployeeDTO;
import com.Shopping.onlineshopping.dto.response.LoginMessage;
import com.Shopping.onlineshopping.dto.response.LoginResponse;
import com.Shopping.onlineshopping.entity.Employee;
import com.Shopping.onlineshopping.repo.EmployeeRepo;
import com.Shopping.onlineshopping.service.EmployeeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceIMPL implements EmployeeService {

    @Autowired
    public EmployeeRepo employeeRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EmployeeMapper employeeMapper;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Override
    public SaveEmployeeDTO saveEmployee(SaveEmployeeDTO saveEmployeeDTO) {
        Employee employee = modelMapper.map(saveEmployeeDTO, Employee.class);
        employee.isActiveState();
        if (!employeeRepo.existsById(employee.getEmployeeId())) {
//          this.passwordEncoder.encode(saveEmployeeDTO.getEmployeePassword());
            employeeRepo.save(employee);
            return saveEmployeeDTO;
        } else {
            throw new RuntimeException("Not Saved");
        }

    }

    @Override
    public UpdateEmployeeDTO updateEmployee(String name) {
        Employee employee = employeeRepo.findAllByEmployeeNameEquals(name);
        UpdateEmployeeDTO updateEmployeeDTO = modelMapper.map(employee, UpdateEmployeeDTO.class);
        return updateEmployeeDTO;

    }

    @Override
    public List<EmployeeDto> gelAllEmployee() {
        List<Employee> employees = employeeRepo.findAll();
        List<EmployeeDto> dtos = employeeMapper.entityListToDtoList(employees);
        return dtos;


    }

    @Override
    public List<EmployeeDto> gelAllEmployee1ecking() {
        List<Employee> getemployees = employeeRepo.findAll();
       // List<EmployeeDto> employeeDtoList = new ArrayList<>();
        List<EmployeeDto> employeeDtos = modelMapper.map(gelAllEmployee(),new TypeToken<List<EmployeeDto>>(){}.getType());
        return employeeDtos;
    }

    @Override
    public EmployeeDto getEmployeeById(int employeeId) {
        if (employeeRepo.existsById(employeeId)) {
            Optional<Employee> employee = employeeRepo.findById(employeeId);
            EmployeeDto employeeDto = modelMapper.map(employee.get(), EmployeeDto.class);
            return employeeDto;
        } else {
            throw new RuntimeException("Not Found");
        }
    }

    @Override
    public EmployeeDto update( EmployeeDto employeeDto) {
        if (employeeRepo.existsById(employeeDto.getEmployeeId())) {
            employeeRepo.save(modelMapper.map(employeeDto, Employee.class));
            return employeeDto;
        }else{

        }return null;

    }

    @Override
    public String deleteEmployee(int employeeId) {
        if(employeeRepo.existsById(employeeId)){
            employeeRepo.deleteById(employeeId);
            return  employeeId+ " delete successfully";
        }else {
            throw new   RuntimeException ("No customer Found ");
        }
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        Employee employee1 = employeeRepo.findByEmployeeEmail(loginDTO.getEmployeeEmail());
        if (employee1 != null) {
            String password = loginDTO.getEmployeePassword();
            Boolean isPwdRight = password.matches(password);
            if (isPwdRight) {
                Optional<Employee> employee = employeeRepo.findByEmployeeEmailAndEmployeePassword(loginDTO.getEmployeeEmail(), password);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }


    }

    @Override
    public Long countAllCustomer() {
        return employeeRepo.count();
    }


}
