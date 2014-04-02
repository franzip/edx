/*
Q1 Write an instead-of trigger that enables updates to the title 
attribute of view LateRating. 

Policy: Updates to attribute title in LateRating should update
Movie.title for the corresponding movie. (You may assume attribute
mID is a key for table Movie.) Make sure the mID attribute of view
LateRating has not also been updated -- if it has been updated, don't 
make any changes. Don't worry about updates to stars or ratingDate.
*/

CREATE TRIGGER Update_Title
INSTEAD OF UPDATE OF title ON LateRating
FOR EACH ROW
BEGIN
UPDATE Movie
SET title = New.title
WHERE title = Old.title AND New.mID IN (SELECT mID from Movie);
END;

/*
Q2 Write an instead-of trigger that enables updates to the stars 
attribute of view LateRating.  

Policy: Updates to attribute stars in LateRating should update 
Rating.stars for the corresponding movie rating. (You may assume 
attributes [mID,ratingDate] together are a key for table Rating.)
Make sure the mID and ratingDate attributes of view LateRating have
not also been updated -- if either one has been updated, don't make 
any changes. Don't worry about updates to title.
*/

CREATE TRIGGER Update_Stars 
INSTEAD OF UPDATE OF stars ON LateRating 
FOR EACH ROW
WHEN  New.mID IN (SELECT mID FROM Rating WHERE ratingDate = New.ratingDate)
BEGIN
UPDATE Rating
SET stars = New.stars
WHERE Old.ratingDate = ratingDate AND Old.mID = mID AND 
	  Old.stars = stars;
END;

/*
Q3 Write an instead-of trigger that enables updates to the mID 
attribute of view LateRating. 

Policy: Updates to attribute mID in LateRating should update Movie.mID 
and Rating.mID for the corresponding movie. Update all Rating tuples 
with the old mID, not just the ones contributing to the view. Don't 
worry about updates to title, stars, or ratingDate.
*/

CREATE TRIGGER Update_mID
INSTEAD OF UPDATE OF mID ON LateRating 
FOR EACH ROW
WHEN new.mID != old.mID
BEGIN
UPDATE Rating set mID = new.mID WHERE mID = old.mID;
UPDATE Movie set mID = new.mID WHERE title = old.title; 
END;

/*
Q4 Write an instead-of trigger that enables deletions from view 
HighlyRated. 

Policy: Deletions from view HighlyRated should delete all ratings 
for the corresponding movie that have stars > 3.
*/

CREATE TRIGGER Delete_Stars
INSTEAD OF DELETE ON HighlyRated
FOR EACH ROW
BEGIN
DELETE FROM Rating
WHERE mID = old.mID AND stars > 3;
END;

/*
Q5 Write an instead-of trigger that enables deletions from view
HighlyRated. 

Policy: Deletions from view HighlyRated should update all ratings 
for the corresponding movie that have stars > 3 so they have stars = 3.
*/

CREATE TRIGGER Update_Stars
INSTEAD OF DELETE ON HighlyRated
FOR EACH ROW
BEGIN
UPDATE Rating
SET stars = 3
WHERE mID = old.mID AND stars > 3;
END;