package com.Shopping.onlineshopping.service;

import com.Shopping.onlineshopping.dto.AdminDTO;
import com.Shopping.onlineshopping.dto.LoginAdminDTO;
import com.Shopping.onlineshopping.dto.response.AdminLoginResponse;

public interface AdminService {
    AdminDTO saveAdmin(AdminDTO adminDTO);

    AdminLoginResponse loginAdmin(LoginAdminDTO loginAdminDTO);
}
