package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.Util.StandardResponse;
import com.Shopping.onlineshopping.dto.EmployeeDto;
import com.Shopping.onlineshopping.dto.LoginDTO;
import com.Shopping.onlineshopping.dto.request.SaveEmployeeDTO;
import com.Shopping.onlineshopping.dto.request.UpdateEmployeeDTO;
import com.Shopping.onlineshopping.dto.response.LoginMessage;
import com.Shopping.onlineshopping.dto.response.LoginResponse;
import com.Shopping.onlineshopping.entity.Employee;
import com.Shopping.onlineshopping.exception.ResourceNotFoundException;
import com.Shopping.onlineshopping.repo.EmployeeRepo;
import com.Shopping.onlineshopping.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/employee")
@CrossOrigin

public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeRepo employeeRepo;

    @PostMapping(path = "/save")
    public SaveEmployeeDTO saveEmployee( @RequestBody SaveEmployeeDTO saveEmployeeDTO) {


        return employeeService.saveEmployee(saveEmployeeDTO);


    }

    @GetMapping(path = "/getAllEmployee1")
    public List<EmployeeDto> getAllCustomer() {
        List<EmployeeDto> allEmployee = employeeService.gelAllEmployee();
        return allEmployee;

    }

    @GetMapping(path = "/update", params = "name")
    public UpdateEmployeeDTO employeeUpdate(@RequestParam(value = "name") String name) {
        return employeeService.updateEmployee(name);
    }

    @PutMapping(path = "/employeeUpdate")
    public EmployeeDto employeeUpdateById( @RequestBody EmployeeDto employeeDto) {
        return employeeService.update(employeeDto);
    }

    @DeleteMapping(path = "deleteEmployee/{employeeId}")
    public ResponseEntity<StandardResponse> deleteEmployee(@PathVariable (value = "employeeId") int employeeId){
        String message =  employeeService.deleteEmployee(employeeId);

        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200, "success", message),
                HttpStatus.OK
        );

    }

    @GetMapping(path = "/getEmployee-by-id", params = "id")
    public EmployeeDto getEmployee(@RequestParam(value = "id") int employeeId ){
        EmployeeDto employeeDto =  employeeService.getEmployeeById(employeeId);
        return employeeDto;
    }

    @PutMapping("/employees/{employeeId}")
    public ResponseEntity<Employee> updateEmployee1(@PathVariable int employeeId, @RequestBody UpdateEmployeeDTO employeeDetails){
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+employeeId));
        employee.setEmployeeName(employeeDetails.getEmployeeName());
        employee.setUserName(employeeDetails.getUserName());
        employee.setEmployeeNumber(employeeDetails.getEmployeeNumber());
        employee.setEmployeePassword(employeeDetails.getEmployeePassword());
        employee.setNic(employeeDetails.getNic());
        employee.setEmployeeEmail(employeeDetails.getEmployeeEmail());
        employee.setEmployeeAddress(employeeDetails.getEmployeeAddress());
        employee.setConfirmPassword(employeeDetails.getConfirmPassword());
        employee.setBusinessType(employeeDetails.getBusinessType());
        employee.setBusinessName(employeeDetails.getBusinessName());



        Employee updateEmployee = employeeRepo.save(employee);
        return ResponseEntity.ok(updateEmployee);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/count")
    public Long countAllEmployee(){
        Long id= employeeService.countAllCustomer();
        return id;

    }

}
