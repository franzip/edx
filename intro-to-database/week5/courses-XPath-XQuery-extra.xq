(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). 

Your solution will need to reference doc("courses.xml") to access the data. 

*******************************************************************:)


(:****************************************************************

Q1 - Return the course number of the course that is cross-listed as "LING180". 

*****************************************************************:)

doc('courses.xml')//Course[contains(Description, 'LING180')]/data(@Number)

(:****************************************************************

Q2 - Return course numbers of courses taught by an instructor with first name "Daphne" or "Julie". 

*****************************************************************:)

let $courses := doc('courses.xml')

for $i in $courses//Course
where $i/Instructors/*/First_Name = 'Julie' or $i/Instructors/*/First_Name = 'Daphne'
return $i/data(@Number)

(:****************************************************************

Q3 - Return titles of courses that have both a lecturer and a professor as instructors. Return each title only once. 

*****************************************************************:)

let $courses := doc('courses.xml')//Course

for $i in $courses
where count($i//Professor) > 0 and count($i//Lecturer) > 0
return $i/Title