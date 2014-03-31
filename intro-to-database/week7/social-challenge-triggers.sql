/*
Q1 - Write one or more triggers to maintain symmetry in friend 
relationships. Specifically, if (A,B) is deleted from Friend, then 
(B,A) should be deleted too. If (A,B) is inserted into Friend then 
(B,A) should be inserted too. Don't worry about updates to the Friend 
table. 
To create more than one trigger, separate the triggers with 
a vertical bar (|).
*/

CREATE TRIGGER Sym1
AFTER DELETE ON Friend
FOR EACH ROW
WHEN EXISTS (SELECT 1 FROM Friend WHERE Friend.ID1=old.ID2 and Friend.ID2=old.ID1)
BEGIN DELETE FROM Friend 
WHERE Friend.ID1 = Old.ID2 AND Friend.ID2 = Old.ID1; 
END;
|
CREATE TRIGGER Sym2
AFTER INSERT ON Friend
FOR EACH ROW
WHEN NOT EXISTS (SELECT 1 FROM Friend WHERE Friend.ID1=new.ID2 and Friend.ID2=new.ID1)
BEGIN INSERT INTO Friend VALUES(new.ID2, new.ID1);
END;

/*
Q2 - Write a trigger that automatically deletes students when they 
graduate, i.e., when their grade is updated to exceed 12. In 
addition, write a trigger so when a student is moved ahead one grade,
then so are all of his or her friends. 
*/

CREATE TRIGGER Graduated
AFTER UPDATE ON Highschooler
FOR EACH ROW
WHEN (new.grade > 12)
BEGIN DELETE FROM Highschooler 
WHERE new.ID = ID;
END;
|
CREATE TRIGGER MovedAhead
AFTER UPDATE ON Highschooler
FOR EACH ROW
WHEN (new.grade - old.grade = 1)
BEGIN UPDATE Highschooler set grade = grade + 1
WHERE ID IN (SELECT DISTINCT ID2 FROM Friend WHERE ID1 = new.ID);
END;

/*
Q3 - Write a trigger to enforce the following behavior: If A liked B
but is updated to A liking C instead, and B and C were friends, make B 
and C no longer friends. Don't forget to delete the friendship in both 
directions, and make sure the trigger only runs when the "liked" (ID2)
person is changed but the "liking" (ID1) person is not changed. 
*/

CREATE TRIGGER Jealousy
AFTER UPDATE ON Likes
FOR EACH ROW
WHEN (new.ID1 = old.ID1) AND EXISTS 
     (SELECT 1 FROM Friend WHERE ID1 = old.ID2 AND ID2 = new.ID2)
BEGIN DELETE FROM Friend 
WHERE (ID1 = new.ID2 AND ID2 = old.ID2) OR 
	  (ID1 = old.ID2 AND ID2 = new.ID2);
END;