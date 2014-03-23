/*
Q1 For every situation where student A likes student B, but we have no information
about whom B likes (that is, B does not appear as an ID1 in the Likes table), 
return A and B's names and grades. 
*/

SELECT H1.name, H1.grade, H2.name, H2.grade
FROM Highschooler H1, Highschooler H2,
(SELECT L1.ID1, L1.ID2
FROM Likes L1
WHERE L1.ID2 NOT IN (SELECT L2.ID1	
					 FROM Likes L2)
) AS aggr
WHERE aggr.ID1 = H1.ID AND aggr.ID2 = H2.ID;

/*
Q2 For every situation where student A likes student B, but student B likes a 
different student C, return the names and grades of A, B, and C. 
*/

SELECT H1.name, H1.grade, H2.name, H2.grade, H3.name, H3.grade
FROM Likes L1, Likes L2, Highschooler H1, Highschooler H2, Highschooler H3
WHERE L1.ID2 = L2.ID1
AND L2.ID2 != L1.ID1
AND L1.ID1 = H1.ID AND L1.ID2 = H2.ID AND L2.ID2 = H3.ID;

/*
Q3 Find those students for whom all of their friends are in different grades from 
themselves. Return the students' names and grades. 
*/

SELECT NAME, grade
FROM Highschooler h1
WHERE grade NOT IN 
	(SELECT grade 
	 FROM 
	 (Highschooler h2
	 JOIN friend ON h2.id=id1) aggr
	 WHERE aggr.id2=h1.id);