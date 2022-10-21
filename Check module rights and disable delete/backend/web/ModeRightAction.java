package com.api.ModeRightCheck.web;
import com.alibaba.fastjson.JSON;
import weaver.conn.RecordSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
public class ModeRightAction {
    public static String removeLastChar(String s) {
        return (s == null || s.length() == 0)
                ? null
                : (s.substring(0, s.length() - 1));
    }

    @GET
    @Path("/1")
    public String getResultWithQuery(@Context HttpServletRequest request, @Context HttpServletResponse response){
        String query = request.getParameter("query");
        if(query == null)return "error: no query";
        System.out.println(query);
        RecordSet rs = new RecordSet();
        String resultStr = "";

        try {
            rs.executeQuery(query);
            while(rs.next()) {
                String x = rs.getInt("id") + "";
                System.out.println("x:" + x);
                resultStr = resultStr + x + ",";
            }
            resultStr = removeLastChar(resultStr);
            if(resultStr == null){
                throw new IllegalArgumentException("query is invalid");
            }
            System.out.print("ResultStr: "+resultStr);
            return JSON.toJSONString(resultStr);
        } catch(Exception e){
            System.out.println("moderightaction error");
            e.printStackTrace(System.out);
        }
        return "error";
    }
}
