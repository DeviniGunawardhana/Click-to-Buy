package com.Shopping.onlineshopping.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @Column(name = "admin_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int adminId;

    @Column(name = "admin_name", length = 100 , nullable = false)
    private String  adminName;

    @Column(name = "admin_password", length = 100 , nullable = false)
    private String  adminPassword;

    @Column(name = "admin_email", length = 45)
    private String adminEmail;
}
