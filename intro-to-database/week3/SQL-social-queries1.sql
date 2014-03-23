/*
Q1 Find the names of all students who are friends with someone named Gabriel. 
*/

SELECT Highschooler.name
FROM Highschooler,
(SELECT Friend.ID2
FROM Friend, (
	SELECT ID
	FROM Highschooler
	WHERE name = "Gabriel") AS namesID
	WHERE Friend.ID1 = namesID.ID) AS friends
WHERE Highschooler.ID = friends.ID2;

/*
Q2 For every student who likes someone 2 or more grades younger than themselves, 
return that student's name and grade, and the name and grade of the student they 
like. 
*/

SELECT oname, ograde, yname, ygrade
FROM
	(SELECT H1.ID AS older, H2.ID AS younger, H1.name AS oname, 
	    H2.name yname, H1.grade AS ograde, H2.grade AS ygrade
	FROM Highschooler H1, Highschooler H2
	WHERE H1.grade - H2.grade >= 2) AS couple
	JOIN
	Likes
WHERE couple.older = Likes.ID1 AND couple.younger = Likes.ID2;

/*
Q3 For every pair of students who both like each other, return the name and grade 
of both students. Include each pair only once, with the two names in alphabetical 
order. 
*/

SELECT result.name1, result.grade1, result.name2, result.grade2 
FROM
	(SELECT DISTINCT H1.name AS name1, H1.grade AS grade1, H2.name AS name2, 
	H2.grade AS grade2
	FROM Highschooler H1, Highschooler H2,
		(SELECT L1.ID1, L1.ID2
		FROM Likes L1, Likes L2
		WHERE L1.ID1 = L2.ID2 AND L1.ID2 = L2.ID1) AS ids
	WHERE ids.ID1 = H1.ID AND ids.ID2 = H2.ID) AS result
WHERE result.name1 < result.name2;

/*
Q4 Find names and grades of students who only have friends in the same grade. 
Return the result sorted by grade, then by name within each grade. 
*/

SELECT name, grade
FROM Highschooler
WHERE ID NOT IN
	(SELECT ID1
	FROM Friend F1 
		JOIN 
		Highschooler H1
		ON H1.ID = F1.ID1
		JOIN 
		Highschooler H2
		ON H2.ID = F1.ID2
	WHERE H1.grade != H2.grade)
ORDER BY grade, name;

/*
Q5 Find the name and grade of all students who are liked by more than one 
other student. 
*/

SELECT name, grade
FROM Highschooler,
	(SELECT ID2, count(ID2) AS nlikes
	 FROM Likes 
	 GROUP BY ID2) AS count
WHERE count.nlikes >= 2 AND count.ID2 = Highschooler.ID;