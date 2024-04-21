package com.Shopping.onlineshopping.service.impl;


import com.Shopping.onlineshopping.dto.AdminDTO;
import com.Shopping.onlineshopping.dto.LoginAdminDTO;
import com.Shopping.onlineshopping.dto.response.AdminLoginResponse;
import com.Shopping.onlineshopping.dto.response.LoginResponse;
import com.Shopping.onlineshopping.entity.Admin;
import com.Shopping.onlineshopping.entity.Customer;
import com.Shopping.onlineshopping.repo.AdminsRepo;
import com.Shopping.onlineshopping.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminServiceIMPL implements AdminService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AdminsRepo adminsRepo;

    @Override
    public AdminDTO saveAdmin(AdminDTO adminDTO) {
        Admin admin = modelMapper.map(adminDTO,Admin.class);

        if(!adminsRepo.existsById(admin.getAdminId())){
             adminsRepo.save(admin);
             return adminDTO;
        }else {

            return null;
        }
    }

    @Override
    public AdminLoginResponse loginAdmin(LoginAdminDTO loginAdminDTO) {
        String msg = "";
        Admin admin1 = adminsRepo.findByAdminEmail(loginAdminDTO.getAdminEmail());
        if (admin1 != null) {
            String password = loginAdminDTO.getAdminPassword();
            Boolean isPwdRight = password.matches(password);
            if (isPwdRight) {
                Optional<Customer> customer = adminsRepo.findByAdminEmailAndAdminPassword(loginAdminDTO.getAdminEmail(), password);
                if (customer.isPresent()) {
                    return new AdminLoginResponse("Login Success", true);
                } else {
                    return new AdminLoginResponse("Login Failed", false);
                }
            } else {

                return new AdminLoginResponse("password Not Match", false);
            }
        } else {
            return new AdminLoginResponse("Email not exits", false);
        }

    }
}
