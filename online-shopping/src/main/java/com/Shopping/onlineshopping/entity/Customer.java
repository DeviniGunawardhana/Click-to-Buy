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

@TypeDefs({
        @TypeDef(name = "json", typeClass = JsonType.class)
})

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "customer")
public class Customer {


    @Id
    @Column(name = "customer_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;

    @Column(name = "customer_name", length = 100 , nullable = false)
    private String  customerName;

    @Column(name = "customer_password", length = 100 , nullable = false)
    private String  customerPassword;

    @Column(name = "customer_email", length = 45)
    private String customerEmail;

    @Column(name = "active_state",columnDefinition = "TINYINT default 0")
    private boolean activeState;

//    @OneToMany(mappedBy="customer")
//    private Set<Orders> orders;


    @OneToMany(mappedBy="customers")
    private Set<Orders> orders;
}
