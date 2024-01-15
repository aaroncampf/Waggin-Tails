package org.launchcode.WagginTails.models;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.launchcode.WagginTails.controllers.AuthController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class AuthFilter implements HandlerInterceptor {

    @Autowired
    AuthController authController;


    //whitelist
    private static  final List<String> whiteList = Arrays.asList( "/api", "/home", "/register", "/login");

    private static boolean isWhiteListed(String path) {
        for(String pathRoot : whiteList){
            if(path.equals("/") || path.startsWith(pathRoot)){
                return true;
            }
        }
        return false;
    }
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse reponse, Object handler) throws IOException{
        if(isWhiteListed(request.getRequestURI())){
            return true;
        }

        HttpSession session = request.getSession();;
        User user = authController.getUserFromSession(session);

        if(user != null){
            return true;
        }
        reponse.sendRedirect("/login");
        return false;
    }
}
