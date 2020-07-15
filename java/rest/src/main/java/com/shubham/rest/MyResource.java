package com.shubham.rest;


import java.util.List;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {

	public static Student s=new Student();
    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
    	return "Got it!";
//        return "redirect:"+"myapi.com";
    }
    
    StudentRepository repo = new StudentRepository();
	
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("students")
    public Response getStudents() {
//        return "Got it! student";
    	System.out.println("hello"+repo.getStudents());
    	return Response.ok()
    			.header("Access-Control-Allow-Origin", "*")
    		      .header("Access-Control-Allow-Credentials", "true")
    		      .header("Access-Control-Allow-Headers",
    		        "origin, content-type, accept, authorization")
    		      .header("Access-Control-Allow-Methods", 
    		        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
    		 
//    			.header("Access-Control-Allow-Origin", "*")
//    			.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
    			
    			.entity(repo.getStudents()).build();
//    			.header("Access-Control-Allow-Origin", "*")
    			
//    	return repo.getStudents();
    }
    
//    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    @Path("addstudent")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addStudent(Student s1) {
    	s=s1;
//    	Student s1 = new Student();
    	System.out.println(s1+"inside myresource");
    	repo.createStud(s1);
//    	repo.success(s1);
//    	System.out.println(s1);
//    	return s1;
//    	String success;
//    	System.out.println(success);
    	if(s1.getSid()==1) {
//    		HttpSession session= req.getSession(true);
//    		session.setAttribute("foo", "bar");
//    		addedStudent(s1);
    		return Response.status(Response.Status.CREATED)
        			.header("Access-Control-Allow-Origin", "*")
    		      .header("Access-Control-Allow-Credentials", "true")
    		      .header("Access-Control-Allow-Headers",
    		        "origin, content-type, accept, authorization")
    		      .header("Access-Control-Allow-Methods", 
    		        "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(s).build();
    	}else {
    	
    	return Response.ok()
    			.header("Access-Control-Allow-Origin", "*")
		      .header("Access-Control-Allow-Credentials", "true")
		      .header("Access-Control-Allow-Headers",
		        "origin, content-type, accept, authorization")
		      .header("Access-Control-Allow-Methods", 
		        "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity("not Success").build();
    }
    }
    
    
    @GET
    @Path("getadded")
    @Produces(MediaType.APPLICATION_JSON)
    public Response addedStudent() {
    	System.out.println("inside get added !!!"+s);
    	s.setName("SHubham");
    		System.out.println(s.getSid());
    		return Response.ok()
        			.header("Access-Control-Allow-Origin", "*")
      		      .header("Access-Control-Allow-Credentials", "true")
      		      .header("Access-Control-Allow-Headers",
      		        "origin, content-type, accept, authorization")
      		      .header("Access-Control-Allow-Methods", 
      		        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
      			.entity(s).build();
    		
    	
    }
}
