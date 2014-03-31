/*
Q1 - Write a trigger that makes new students named 'Friendly' 
automatically like everyone else in their grade. That is, after the 
trigger runs, we should have ('Friendly', A) in the Likes table for 
every other Highschooler A in the same grade as 'Friendly'.
*/

CREATE TRIGGER Friendly
AFTER INSERT ON Highschooler
FOR EACH ROW
WHEN (new.name = 'Friendly')
BEGIN INSERT INTO LIKES 
SELECT new.id, ID from Highschooler WHERE grade=new.grade and id != new.id; 
END;

/*
Q2 - Write one or more triggers to manage the grade attribute of new 
Highschoolers. If the inserted tuple has a value less than 9 or greater 
than 12, change the value to NULL. On the other hand, if the inserted 
tuple has a null value for grade, change it to 9. 
To create more than one trigger, separate the triggers with a 
vertical bar (|).
*/

CREATE TRIGGER MGrade1
AFTER INSERT ON Highschooler
FOR EACH ROW
WHEN (new.grade < 9 OR new.grade > 12)
BEGIN UPDATE Highschooler set grade = NULL WHERE ID = new.ID;
END;
|
CREATE TRIGGER MGrade2
AFTER INSERT ON Highschooler
FOR EACH ROW
WHEN (new.grade IS NULL)
BEGIN UPDATE Highschooler set grade = 9 WHERE ID = new.ID;
END;

/*
Q3 - Write a trigger that automatically deletes students when they 
graduate, i.e., when their grade is updated to exceed 12. 
*/

CREATE TRIGGER Graduated
AFTER UPDATE ON Highschooler
FOR EACH ROW
WHEN (new.grade > 12)
BEGIN DELETE FROM Highschooler 
WHERE new.ID = ID;
END;