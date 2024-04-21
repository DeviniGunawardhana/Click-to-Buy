package com.Shopping.onlineshopping.controller;

import com.Shopping.onlineshopping.dto.AdminDTO;
import com.Shopping.onlineshopping.dto.LoginAdminDTO;
import com.Shopping.onlineshopping.dto.LoginCustomerDTO;
import com.Shopping.onlineshopping.dto.request.RequestSaveCustomerDTO;
import com.Shopping.onlineshopping.dto.response.AdminLoginResponse;
import com.Shopping.onlineshopping.dto.response.LoginResponse;
import com.Shopping.onlineshopping.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping(path = "/save")
    public AdminDTO saveCustomer(@RequestBody AdminDTO adminDTO){
        adminService.saveAdmin(adminDTO);
        return adminDTO;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginAdminDTO loginAdminDTO){
        AdminLoginResponse adminLoginResponse = adminService.loginAdmin(loginAdminDTO);
        return ResponseEntity.ok(adminLoginResponse);
    }


}
