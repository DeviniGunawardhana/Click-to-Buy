package com.Shopping.onlineshopping.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class EmployeeDto {
    private int employeeId;
    private String employeeName;
    private String  userName;
    private String employeePassword;
    private String  confirmPassword;
    private String employeeAddress;
    private String employeeEmail;
    private int employeeNumber;
    private String businessName;

    private String nic;
    private String businessType;
    private boolean activeState;
}
