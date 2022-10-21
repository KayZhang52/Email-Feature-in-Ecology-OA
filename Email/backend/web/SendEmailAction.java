package com.api.workflowEmail2.web;

import com.alibaba.fastjson.JSONObject;
import com.api.workflowEmail2.service.SendEmailService;
import com.api.workflowEmail2.service.impl.SendEmailServiceImpl;
import com.engine.common.util.ParamUtil;
import com.engine.common.util.ServiceUtil;
import weaver.hrm.HrmUserVarify;
import weaver.hrm.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.POST;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

@Path("/workflow/externalEmail")
public class SendEmailAction {
    private SendEmailService getService(User user){
        return (SendEmailServiceImpl) ServiceUtil.getService(SendEmailServiceImpl.class, user);
    }

    @POST
    @Path("/send")
    @Produces({MediaType.TEXT_PLAIN})
    public String send(@Context HttpServletRequest request, @Context HttpServletResponse response){
        // use a hashmap to store response json object
        Map<String, Object> apidatas = new HashMap<String, Object>();
        try{
            // get user object of current request
            User user = HrmUserVarify.getUser(request, response);
            apidatas.putAll(getService(user).sendEmail(ParamUtil.request2Map(request)));
            apidatas.put("user", user.getAccount());
            apidatas.put("api_status", true);
        }catch(Exception e){
            e.printStackTrace(System.out);
            apidatas.put("api_status", false);
        }
        return JSONObject.toJSONString(apidatas);
    }

    @GET
    @Path("/checkNeedSend")
    @Produces({MediaType.TEXT_PLAIN})
    public String check(@Context HttpServletRequest request, @Context HttpServletResponse response){
        Map<String, Object> apidatas = new HashMap<String, Object>();
        try{
            User user = HrmUserVarify.getUser(request, response);
            apidatas.putAll(getService(user).checkNeedSend(ParamUtil.request2Map(request)));
            apidatas.put("user", user.getAccount());
            apidatas.put("api_status", true);
        }catch(Exception e){
            e.printStackTrace(System.out);
            apidatas.put("api_status", false);
        }
        return JSONObject.toJSONString(apidatas);
    }
}
