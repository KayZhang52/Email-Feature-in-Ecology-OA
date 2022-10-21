package com.api.workflowEmail2.web;

import com.alibaba.fastjson.JSONObject;
import com.api.workflowEmail2.service.EmailConfigurationService;
import com.api.workflowEmail2.service.impl.EmailConfigurationServiceImpl;
import com.engine.common.util.ParamUtil;
import com.engine.common.util.ServiceUtil;
import weaver.hrm.HrmUserVarify;
import weaver.hrm.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

@Path("/workflow/externalEmail/config")
public class EmailConfigurationAction {
    // call weaver function for getting instance of service for usage
    private EmailConfigurationService getService(User user){
        return (EmailConfigurationServiceImpl) ServiceUtil.getService(EmailConfigurationServiceImpl.class, user);
    }

    @POST
    @Path("/add")
    @Produces({MediaType.TEXT_PLAIN})
    public String addConfig(@Context HttpServletRequest request, @Context HttpServletResponse response){
        // use a hashmap to store response json object
        Map<String, Object> apidatas = new HashMap<String, Object>();
        try{
            // get user object of current request
            User user = HrmUserVarify.getUser(request, response);
            apidatas.putAll(getService(user).addConfiguration(ParamUtil.request2Map(request)));
            apidatas.put("user", user.getAccount());
            apidatas.put("api_status", true);
        }catch(Exception e){
            e.printStackTrace();
            apidatas.put("api_status", false);
        }
        return JSONObject.toJSONString(apidatas);
    }

    @DELETE
    @Path("/delete")
    @Produces({MediaType.TEXT_PLAIN})
    public String deleteConfig(@Context HttpServletRequest request, @Context HttpServletResponse response){
        // use a hashmap to store response json object
        Map<String, Object> apidatas = new HashMap<String, Object>();
        try{
            // get user object of current request
            User user = HrmUserVarify.getUser(request, response);
            apidatas.putAll(getService(user).deleteConfiguration(ParamUtil.request2Map(request)));
            apidatas.put("user", user.getAccount());
            apidatas.put("api_status", true);
        }catch(Exception e){
            e.printStackTrace();
            apidatas.put("api_status", false);
        }
        return JSONObject.toJSONString(apidatas);
    }

    @GET
    @Path("/get")
    @Produces({MediaType.TEXT_PLAIN})
    public String getConfigs(@Context HttpServletRequest request, @Context HttpServletResponse response){
        Map<String, Object> apidatas = new HashMap<String, Object>();
        try{
            // get user object of current request
            User user = HrmUserVarify.getUser(request, response);
            apidatas.putAll(getService(user).getConfigurations(ParamUtil.request2Map(request)));
            apidatas.put("user", user.getAccount());
            apidatas.put("api_status", true);
        }catch(Exception e){
            e.printStackTrace();
            apidatas.put("api_status", false);
        }
        return JSONObject.toJSONString(apidatas);
    }
}

