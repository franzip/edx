/*
Q1 Finally, write a single instead-of trigger that combines all
three of the previous triggers to enable simultaneous updates to
attributes mID, title, and/or stars in view LateRating. Combine 
the view-update policies of the three previous problems, with the 
exception that mID may now be updated. Make sure the ratingDate 
attribute of view LateRating has not also been updated -- if it has 
been updated, don't make any changes.
*/

CREATE TRIGGER Simultaneous_Update
INSTEAD OF UPDATE ON LateRating
FOR EACH ROW
WHEN old.mID IN (SELECT mID from Rating WHERE ratingDate = new.ratingDate)
BEGIN

UPDATE Movie 
SET title = new.title, mID = new.mID WHERE old.mID = mID;

UPDATE Rating 
SET stars = new.stars WHERE old.mID = mID AND ratingDate = old.ratingDate;

UPDATE Rating 
SET mID = new.mID WHERE old.mID = mID;

END;

/*
Q2 Write an instead-of trigger that enables insertions into view 
HighlyRated. 

Policy: An insertion should be accepted only when the (mID,title)
pair already exists in the Movie table. (Otherwise, do nothing.)
Insertions into view HighlyRated should add a new rating for the 
inserted movie with rID = 201, stars = 5, and NULL ratingDate.
*/

CREATE TRIGGER Enable_Upd_HighlyRated
INSTEAD OF INSERT ON HighlyRated
WHEN new.mID in (SELECT mID FROM Movie WHERE mID = new.mID AND
				 title = new.title)
BEGIN
INSERT INTO Rating VALUES (201, new.mID, 5, NULL);
END; 

/*
Q3 Write an instead-of trigger that enables insertions into view
NoRating. 

Policy: An insertion should be accepted only when the (mID,title)
pair already exists in the Movie table. (Otherwise, do nothing.) 
Insertions into view NoRating should delete all ratings for the 
corresponding movie.
*/

CREATE TRIGGER Enable_Upd_NoRating
INSTEAD OF INSERT ON NoRating
FOR EACH ROW
WHEN new.mID in (SELECT mID FROM Movie WHERE mID = new.mID AND
				 title = new.title)
BEGIN
DELETE FROM Rating WHERE mID = new.mID;
END; 