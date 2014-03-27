(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). 

Your solution will need to reference doc("courses.xml") to access the data. 

*******************************************************************:)


(:****************************************************************

Q1 - Return the title of the course with the largest enrollment. 

*****************************************************************:)

let $allcourses := doc("courses.xml"),
	$courses := $allcourses//Course
	for $i in $courses
		where $i/@Enrollment = max($courses/@Enrollment)
		return $i/Title

(:****************************************************************

Q2 - Return course numbers of courses that have the same title as some other course. (Hint: You might want to use the "preceding" and "following" navigation axes for this query, which were not covered in the video or our demo script; they match any preceding or following node, not just siblings.) 

*****************************************************************:)

for $i in doc("courses.xml")//Course,
	$j in doc("courses.xml")//Course
where $i/Title = $j/Title 
	and $i/@Number != $j/@Number
	return $i/data(@Number)	

(:****************************************************************

Q3 - Return the number (count) of courses that have no lecturers as instructors. 

*****************************************************************:)

count(doc("courses.xml")//Course/Instructors) - count(doc("courses.xml")//Course/Instructors[Lecturer])

(:****************************************************************

Q4 - Return titles of courses taught by the chair of a department. For this question, you may assume that all professors have distinct last names. 

*****************************************************************:)

for $i in doc("courses.xml")//Course
where $i/Instructors/*/Last_Name = $i/parent::Department/Chair/Professor//Last_Name
	return $i/Title

(:****************************************************************

Q5 - Return titles of courses taught by a professor with the last name "Ng" but not by a professor with the last name "Thrun". 

*****************************************************************:)

let $courses := doc('courses.xml')//Course

for $i in (
    for $j in $courses
      where every $last_name in $j//Professor/Last_Name satisfies $last_name != 'Thrun'
      return $j 
    )
  where $i//Professor/Last_Name = 'Ng'
  return $i/Title

(:****************************************************************

Q6 - Return course numbers of courses that have a course taught by Eric Roberts as a prerequisite. 

*****************************************************************:)

let $courses := doc('courses.xml')//Course

for $i in $courses
where $i//data(Prereq) = (
	let $roberts := doc('courses.xml')//Course[Instructors/*/Last_Name = 'Roberts']/data(@Number)
	return $roberts
)
return $i/data(@Number)

(:****************************************************************

Q7 - Create a summary of CS classes: List all CS department courses in order of enrollment. For each course include only its Enrollment (as an attribute) and its Title (as a subelement). 

*****************************************************************:)

let $courses := doc('courses.xml')//Department[@Code = 'CS']/Course

return <Summary> 
  {
    for $c in $courses
      order by xs:int($c/@Enrollment)
      return <Course Enrollment = "{$c/data(@Enrollment)}">{$c/Title}</Course>
  }
  </Summary>

(:****************************************************************

Q8 - Return a "Professors" element that contains as subelements a listing of all professors in all departments, sorted by last name with each professor appearing once. The "Professor" subelements should have the same structure as in the original data. For this question, you may assume that all professors have distinct last names. Watch out -- the presence/absence of middle initials may require some special handling. (This problem is quite challenging; congratulations if you get it right.) 

*****************************************************************:)

let $prof := doc('courses.xml')//Professor

let $unique_prof := (
      $prof except (
        for $i in $prof
          where ($i/Last_Name = $i/following::*/Last_Name and $i/First_Name = $i/following::*/First_Name)
          return $i
      )
    )

return <Professors>
  {
    for $i in $unique_prof
    order by $i/Last_Name
    return $i
  }
  </Professors>
