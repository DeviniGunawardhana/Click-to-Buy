package com.Shopping.onlineshopping.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "item_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;

    @Column(name = "itemName", length = 45, nullable = false)
    private String itemName;

    @Column(name = "shopName", length = 45 , nullable = false)
    private String shopName;

    @Column(name = "date", length = 45 , nullable = false)
    private Date date;

    @Column(name = "employeeId", length = 45 , nullable = false)
    private int employeeId;

    @Column (name = "price", length = 20, nullable = false)
    private double price;



    @Column (name = "quantity", length = 100,nullable = false)
    private int quantity;

    @Column (name = "itemType", length = 100,nullable = false)
    private String itemType;


    @Column (name = "description",length = 245, nullable = false)
    private String description;

    @Column(name = "image",length = 200, nullable = false)
    private  String  image;

    @Column(name = "active_state",columnDefinition = "TINYINT default 0")
    private boolean activeState;

//    @OneToMany(mappedBy="items")
//    private Set<OrderDetails> orderDetails;
//

    @OneToMany(mappedBy="items")
    private Set<OrderDetails> orderDetails;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_images",
        joinColumns = {
            @JoinColumn(name = "item_id")
        },
            inverseJoinColumns = {
            @JoinColumn(name = "id")
            }
    )
    private Set<Image> productImage;

}
