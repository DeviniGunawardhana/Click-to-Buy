package com.Shopping.onlineshopping.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
public class LoginMessage {
    String message;
    Boolean status;

//    public String getMessage(){return  message;}
//
//    public void setMessage(String message){this.message=message;}
//
//    public Boolean getStatus() {return status;}
//
//    public void

    public LoginMessage (String message, Boolean status){
        this.message=message;
        this.status=status;
    }
}
