package com.Shopping.onlineshopping.entity;

import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;

@Entity
@Table(name = "orderDetails")
@TypeDefs({
        @TypeDef(name = "json",typeClass = JsonType.class)
})
@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDetails {
    @Id
    @Column(name = "order_Details_id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderDetailsId;

    @Column(name = "itemName", length = 45, nullable = false)
    private String itemName;

    @Column (name = "quantity",length = 50, nullable = false)
    private int quantity;

    @Column (name = "amount", length = 100,nullable = false)
    private Double amount;


//    @ManyToOne
//    @JoinColumn(name="item_id", nullable=false)
//    private Item items;
//
//
//    @ManyToOne
//    @JoinColumn(name="order_id", nullable=false)
//    private Orders orders;


    @ManyToOne
    @JoinColumn(name="order_id", nullable=false)
    private Orders orders;

    @ManyToOne
    @JoinColumn(name="item_id", nullable=false)
    private Item items;




}
