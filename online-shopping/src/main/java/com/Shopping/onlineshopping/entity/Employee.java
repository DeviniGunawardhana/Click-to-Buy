package com.Shopping.onlineshopping.entity;


import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "employee")
@TypeDefs({
        @TypeDef(name = "json", typeClass = JsonType.class)
})
public class Employee {

    @Id
    @Column(name = "employee_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeId;

    @Column(name = "employee_name", length = 100 )
    private String  employeeName;

    @Column(name = "user_name", length = 100 )
    private String  userName;

    @Column(name = "employee_password", length = 100 )
    private String  employeePassword;

    @Column(name = "employee_confirm_password", length = 100 )
    private String  confirmPassword;

    @Column(name = "employee_address", length = 250 )
    private String employeeAddress;

    @Column(name = "employee_email", length = 45)
    private String employeeEmail;


    @Column(name = "employee_number" , length = 12)
    private int employeeNumber;

    @Column(name = "nic", length = 20)
    private String nic;



    @Column(name = "business_Type", length = 20)
    private String businessType;

    @Column(name = "business_name",length = 100)
    private String businessName;


    @Column(name = "active_state",columnDefinition = "TINYINT default 0")
    private boolean activeState;


}
