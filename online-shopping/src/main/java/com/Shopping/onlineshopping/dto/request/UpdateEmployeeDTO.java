package com.Shopping.onlineshopping.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
@AllArgsConstructor
@NoArgsConstructor
@Data

public class UpdateEmployeeDTO {

    private String employeeName;
    private String  userName;
    private String employeePassword;
    private String  confirmPassword;
    private String employeeAddress;
    private String employeeEmail;
    private int employeeNumber;
    private String businessName;
    private String businessType;
    private String nic;

}
