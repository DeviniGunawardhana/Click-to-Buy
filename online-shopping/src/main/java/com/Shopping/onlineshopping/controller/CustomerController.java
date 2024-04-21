package com.Shopping.onlineshopping.controller;


import com.Shopping.onlineshopping.Util.StandardResponse;
import com.Shopping.onlineshopping.dto.CustomerDto;
import com.Shopping.onlineshopping.dto.EmployeeDto;
import com.Shopping.onlineshopping.dto.LoginCustomerDTO;
import com.Shopping.onlineshopping.dto.LoginDTO;
import com.Shopping.onlineshopping.dto.paginate.PaginateResponseCustomerDTO;
import com.Shopping.onlineshopping.dto.request.RequestSaveCustomerDTO;
import com.Shopping.onlineshopping.dto.request.UpdateCustomerDTO;
import com.Shopping.onlineshopping.dto.response.LoginResponse;
import com.Shopping.onlineshopping.dto.response.ResponseSaveCustomerDTO;
import com.Shopping.onlineshopping.service.CustomerService;
import com.Shopping.onlineshopping.service.impl.CustomerServiceIMPL;
import org.aspectj.weaver.loadtime.Options;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Max;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/customer")


public class CustomerController {
    @Autowired
    private CustomerService CustomerService;


    @PostMapping (path = "/save")
    public RequestSaveCustomerDTO saveCustomer( @RequestBody RequestSaveCustomerDTO requestSaveCustomerDTO){
      CustomerService.saveCustomer(requestSaveCustomerDTO);
        return requestSaveCustomerDTO;
    }

    @GetMapping(path = "/getCustomer-by-id", params = "id")
    public CustomerDto getCustomer(@RequestParam(value = "id") int customerId ){
        CustomerDto customerDto =CustomerService.getCustomer(customerId);
        return customerDto;
    }

    @GetMapping(path = "/getCustomer-by-name", params = "name")
    public CustomerDto getCustomerByName(@RequestParam(value = "name") String customerName){
        CustomerDto customerDto =CustomerService.getCustomerByName(customerName);
        return customerDto;
    }

    @GetMapping(path = "/get-all-customer" )
    public List<CustomerDto> getAllCustomer(){
        List<CustomerDto> allCustomers = CustomerService.getAllCustomer();
        return allCustomers;
    }

    @GetMapping(value = "/get-all-customer-by-paginate",
            params = {"size", "page"})
    public PaginateResponseCustomerDTO getAllCustomerByPaginate(@RequestParam (value = "page")   int page,
                                                                @RequestParam(value = "size")@Max(50) int size){
        PaginateResponseCustomerDTO paginateResponseCustomerDTO= CustomerService.getAllCustomerByPaginate(page, size);
        return paginateResponseCustomerDTO;
    }

    @PutMapping(path = "/update", params = "id")
    public  String updateCustomer(@RequestParam (value = "id") int customerId){
        CustomerService.updateCustomer(customerId);
        return "";
    }



//    @PutMapping(path = "/updateCustomer")
//    public String update(@RequestBody UpdateCustomerDTO updateCustomerDTO){
//        return   CustomerService.update(updateCustomerDTO);
//    }

    @PutMapping(path = "/updateCustomers")
    public ResponseEntity<StandardResponse> updateCus(@RequestBody UpdateCustomerDTO updateCustomerDTO){
       String message = CustomerService.updates(updateCustomerDTO);

        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200, "success", message),
                HttpStatus.OK
        );
    }

    @DeleteMapping(path = "deleteCustomer/{customerId}")
    public ResponseEntity<StandardResponse> deleteCustomer(@PathVariable (value = "customerId") int customerId){
        String message =  CustomerService.deleteCustomer(customerId);

        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200, "success", message),
                HttpStatus.OK
        );

    }
//
//    @DeleteMapping("/employees/{id}")
//    public ResponseEntity<Map<String, Boolean>> deleteEmployee (@PathVariable Long id){
//        Employee employee = employeeRepository.findById(id).
//                orElseThrow(()-> new ResourceNotFoundException("Employe not Exit with id :" + id));
//
//        employeeRepository.delete(employee);
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("delete", Boolean.TRUE);
//        return ResponseEntity.ok(response);
//    }


    @GetMapping(path = "/get-all-customer/{status}")
    public List<CustomerDto> getAllCustomersByUsingStatus(@RequestParam (value = "status") boolean activeState){
        List<CustomerDto> allCustomers = CustomerService.getAllCustomerUseActiveState(activeState);
        return allCustomers;
    }

//    @GetMapping(path = "/login",
//               params = {"email", "password"})
//    public CustomerDto login(@RequestParam (value = "email") String email,
//                             @RequestParam (value = "password")String password){
//       CustomerDto customerDto= CustomerService.login(email,password);
//        return customerDto;
//    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginCustomerDTO loginCustomerDTO){
        LoginResponse loginResponse = CustomerService.loginEmployee(loginCustomerDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/count")
    public Long countAllCustomer(){
        Long id= CustomerService.countAllCustomer();
        return id;

    }

}
