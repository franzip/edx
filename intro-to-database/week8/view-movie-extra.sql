/*
Q1 Write an instead-of trigger that enables deletions from view 
NoRating. 

Policy: Deletions from view NoRating should delete the 
corresponding movie from the Movie table.
*/

CREATE TRIGGER Enable_Del_NoRating
INSTEAD OF DELETE ON NoRating
FOR EACH ROW
BEGIN
DELETE FROM Movie WHERE mID = Old.mID;
END; 

/*
Q2 Write an instead-of trigger that enables deletions from view 
NoRating. 

Policy: Deletions from view NoRating should add a new rating for the 
deleted movie with rID = 201, stars = 1, and NULL ratingDate.
*/ 

CREATE TRIGGER Enable_Del_NoRating2
INSTEAD OF DELETE ON NoRating
FOR EACH ROW
BEGIN
INSERT INTO Rating VALUES(201, old.mID, 1, NULL);
END; 