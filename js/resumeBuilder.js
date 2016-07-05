/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%", "Marina Popa");
var formattedRole = HTMLheaderRole.replace("%data%", "Intern");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


 var work = {
 	"jobs" : [
 		{"employer" : " AND",
 		"title" : "stud",
 		"location" : " ubb",
 		"dates" : "12.02.2016",
 		"description" : "descriptionAND"},
 		{"employer" : " ANY",
 		"title" : "nurse",
 		"location" : " ati",
 		"dates" : "12.10.2016",
 		"description" : "descriptionANY"}
 	]
 }

 var projects = {
 	"projects" : [
 	{
 		"title" : "Project1Title",
 		"dates" : "03.09.2015",
 		"description" : "Project1description"
 	},{

 		"title" : "Project1Title",
 		"dates" : "03.09.2015",
 		"description" : "Project1description"
 	}]
 }

var bio = {
	"name" : "BioName",
	"role" : "BioRole",
	"welcomeMessage" : " BiowelcomeMessage",
	"biopic" : "biopic",
	"contacts" : { " mobilenumber" : "0787985565",
	"email" : "andreea@mail.com",
	"github" : "gitandreea",
	"twitter" ; " twitter",
	"location" : " locationOfcontact"},
	"skills" : ["a","b","c"]
}

var education = {
	"schools" : [
		{
			"name" : "schoolName",
			"location" : "schoolLocation",
			"degree dates" : "10.10.2014",
			"url" : "www.google.com",
			"majors" = ["A","B"]
		}
	],
	"onlineCourses" : [{
		"title" : "courseTitle",
		"school" : " courseSchool",
		"dates" : "09.09.2010",
		"url" : "www.google.com"
	}]
}

if (bio.skills){
	$("#header").append(HTMLskillsStart);
	var formatSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formatSkill);
}













