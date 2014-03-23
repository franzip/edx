/*
Q1 Find all students who do not appear in the Likes table (as a student who likes 
or is liked) and return their names and grades. Sort by grade, then by name within
each grade. 
*/

SELECT name, grade
FROM Highschooler
WHERE Highschooler.ID NOT IN
	(SELECT L1.ID1 AS listid
	FROM Likes as L1
	UNION
	SELECT L2.ID2
	FROM Likes AS L2)
ORDER BY grade, name;

/*
Q2 For each student A who likes a student B where the two are not friends, find if 
they have a friend C in common (who can introduce them!). For all such trios, 
return the name and grade of A, B, and C. 
*/

SELECT DISTINCT H1.name, H1.grade, H2.name, H2.grade, H3.name, H3.grade
FROM Highschooler H1, Likes, Highschooler H2, Highschooler H3, Friend F1, Friend F2
WHERE H1.ID = Likes.ID1 AND Likes.ID2 = H2.ID AND
	  H1.ID = F1.ID1 AND F1.ID2 = H3.ID AND
      H3.ID = F2.ID1 AND F2.ID2 = H2.ID AND H2.ID NOT IN 
	 (SELECT ID2 
	  FROM Friend 
	  WHERE ID1 = H1.ID); 

/*
Q3 Find the difference between the number of students in the school and the number 
of different first names. 
*/

SELECT COUNT(DISTINCT H2.ID) - COUNT(DISTINCT H1.name) as difference
FROM Highschooler H1, Highschooler H2
WHERE H1.name != H2.name;

/*
Q4 What is the average number of friends per student? (Your result should be just 
one number.) 
*/

SELECT AVG(aggr.nfriends)
FROM
	(SELECT COUNT(ID2) AS nfriends
	FROM Friend
	WHERE ID1 != ID2
	GROUP BY ID1) AS aggr;

/*
Q5 Find the number of students who are either friends with Cassandra or are friends
of friends of Cassandra. Do not count Cassandra, even though technically she is a 
friend of a friend. 
*/

SELECT count(*) AS cassandraf
FROM 
	(SELECT * 
	 FROM friend 
	 WHERE id1 = 
		(SELECT id FROM Highschooler WHERE NAME = 'Cassandra')) a
		 JOIN
		(SELECT * FROM friend) b ON a.id2=b.id1;

/*
Q6 Find the name and grade of the student(s) with the greatest number of friends. 
*/

SELECT name, grade
FROM (
	  SELECT id1 AS id, count(*) AS nfriends
      FROM Friend 
      GROUP BY id1) 
	  JOIN 
	  Highschooler USING (id)
	  WHERE nfriends = 
	  			(SELECT max(nfriends) 
				 FROM (SELECT id1, count(*) as nfriends 
                 	   FROM Friend 
                 	   GROUP BY id1));