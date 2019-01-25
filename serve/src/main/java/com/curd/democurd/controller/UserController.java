package com.curd.democurd.controller;

import org.aspectj.weaver.ast.Var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.curd.democurd.contracts.UserRepository;
import com.curd.democurd.model.User;

import javax.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by rajeevkumarsingh on 27/06/17.
 */
@RestController
@ControllerAdvice
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository _UserRepository;
    @PostMapping("/user")
    @ResponseBody
    public User createUser(@Valid @RequestBody User _user) {
        return _UserRepository.save(_user);
    }

    @GetMapping(value = "user")
    public User getMethodName() {
        User _user = new User();
        return _user; 
    }
    @GetMapping(value = "userpassword")
    public ResponseEntity<User>  getuserpassword() {
        User _user = new User();
        _user = _UserRepository.findByUsernameAndPassword("ng", "123qwewq");
    //
        return new ResponseEntity<>(_user,HttpStatus.FOUND);
    }
    @PostMapping("/user/login")
    @ResponseBody
    public ResponseEntity<User>  login(@RequestBody User _user) 
    {
    User _User = _UserRepository.findByUsernameAndPassword( _user.getusername(), _user.getpassword());
    if (_User == null) {
        return new ResponseEntity<>(_User,HttpStatus.NOT_FOUND);
    }
     return new ResponseEntity<>(_User,HttpStatus.OK);
    }
}
