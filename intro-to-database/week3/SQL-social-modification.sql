/*
Q1 It's time for the seniors to graduate. Remove all 12th graders from Highschooler.
*/

DELETE FROM Highschooler
WHERE ID IN (
	SELECT ID
	FROM Highschooler
	WHERE grade = 12);

/*
Q2 If two students A and B are friends, and A likes B but not vice-versa, remove
the Likes tuple
*/

DELETE FROM Likes
WHERE ID2 IN 
	(SELECT ID2 FROM Friend WHERE Likes.ID1 = ID1) AND
    ID2 NOT IN (SELECT L1.ID1 FROM Likes L1 WHERE Likes.ID1 = L1.ID2);

/*
Q3 For all cases where A is friends with B, and B is friends with C, add a new 
friendship for the pair A and C. Do not add duplicate friendships, friendships
that already exist, or friendships with oneself. (This one is a bit challenging;
congratulations if you get it right.) 
*/

INSERT INTO Friend
SELECT F1.id1, F2.id2
FROM Friend F1 JOIN Friend F2 ON F1.id2 = F2.id1
WHERE F1.id1 != F2.id2
EXCEPT
SELECT * FROM Friend;