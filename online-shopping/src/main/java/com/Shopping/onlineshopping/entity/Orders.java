package com.Shopping.onlineshopping.entity;

import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "orders")
@TypeDefs({
        @TypeDef(name = "json",typeClass = JsonType.class)
})
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Orders {

    @Id
    @Column(name = "order_id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderId;

    @Column(name = "order_date", columnDefinition = "DATETIME")
    private Date date;

    @Column(name = "amount",length = 100,nullable = false)
    private Double amount;

    @Column(name = "active_state",columnDefinition = "TINYINT default 1")
    private boolean activeState;


//    @ManyToOne
//    @JoinColumn(name="customer_id", nullable=false)
//    private Customer customer;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    private Customer customers;



//    @OneToMany(mappedBy="orders")
//    private Set<OrderDetails> orderDetails;
//
//    public Orders(Customer customers, Date date, Double total) {
//        this.customer = customers;
//        this.date = date;
//        this.total = total;
//    }

    @OneToMany(mappedBy="orders")
    private Set<OrderDetails> orderDetails;


    public Orders(Customer customers, Date date, Double amount) {
        this.customers = customers;
        this.date = date;
        this.amount = amount;
    }

}
