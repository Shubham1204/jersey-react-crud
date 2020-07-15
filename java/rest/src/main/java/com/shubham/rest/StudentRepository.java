package com.shubham.rest;

import java.util.ArrayList;
import java.util.List;

public class StudentRepository {

	List<Student> students;
	
	public StudentRepository() {
		
		System.out.println("get called.....");
		students = new ArrayList<>();
		
		Student s1 = new Student();
		s1.setSid(101);
		s1.setName("Sam");
		s1.setEmail("sam@h");
		
		Student s2 = new Student();
		s2.setSid(102);
		s2.setName("ram");
		s2.setEmail("ram@h");
		
		students.add(s1);
		students.add(s2);
		System.out.println(students);
	}
	
	public List<Student> getStudents(){
		System.out.println("inside getstudent");
		System.out.println(students);
		return students;
	}

	public void createStud(Student s1) {
		// TODO Auto-generated method stub
		students.add(s1);
		
		System.out.println(s1.toString()+"addeddddddddd");
	}
//	public Student success(Student s1) {
//		Student s = new Student();
//		s.setSid(s1.getSid());
//		s.setEmail(s1.getEmail());
//		s.setName(s1.getName());
//		return s;
//	}
//	public String notsuccess() {
//		return "not done";
//	}
}
