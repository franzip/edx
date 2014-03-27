(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). 

Your solution will need to reference doc("courses.xml") to access the data. 

*******************************************************************:)


(:****************************************************************

Q1 - Return all Title elements (of both departments and courses). 

*****************************************************************:)

doc("courses.xml")//Title

(:****************************************************************

Q2 - Return last names of all department chairs. 

*****************************************************************:)

doc("courses.xml")/Course_Catalog/Department/Chair/Professor/Last_Name

(:****************************************************************

Q3 - Return titles of courses with enrollment greater than 500. 

*****************************************************************:)

doc("courses.xml")//Course[data(@Enrollment > 500)]/Title

(:****************************************************************

Q4 - Return titles of departments that have some course that takes "CS106B" as a prerequisite. 

*****************************************************************:)

doc("courses.xml")/Course_Catalog/Department[Course/Prerequisites/Prereq = "CS106B"]/Title

(:****************************************************************

Q5 - Return last names of all professors or lecturers who use a middle initial. Don't worry about eliminating duplicates. 

*****************************************************************:)

doc("courses.xml")//(Lecturer|Professor)[Middle_Initial]/Last_Name

(:****************************************************************

Q6 - Return the count of courses that have a cross-listed course (i.e., that have "Cross-listed" in their description).

*****************************************************************:)

sum(doc("courses.xml")//Course[contains(Description, "Cross-listed")]/count(Description))

(:****************************************************************

Q7 - Return the average enrollment of all courses in the CS department. 

*****************************************************************:)

let $courses := doc("courses.xml")//Department[data(@Code) = 'CS']/Course/@Enrollment
return avg($courses)

(:****************************************************************

Q8 - Return last names of instructors teaching at least one course that has "system" in its description and enrollment greater than 100. 

*****************************************************************:)

for $i in doc("courses.xml")//Course[data(@Enrollment) > 100]
where some $j in $i/Description
	satisfies contains($j, 'system')

return $i/Instructors/*/Last_Name