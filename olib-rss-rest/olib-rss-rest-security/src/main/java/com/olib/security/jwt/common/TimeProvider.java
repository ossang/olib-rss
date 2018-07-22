package com.olib.security.jwt.common;

import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class TimeProvider implements Serializable {

    private static final long serialVersionUID = -4451665773506732438L;

    public Date now() {
        return new Date();
    }
}