/*
Q1 Add the reviewer Roger Ebert to your database, with an rID of 209. 
*/

INSERT INTO Reviewer VALUES (209, "Roger Ebert");

/*
Q2 Insert 5-star ratings by James Cameron for all movies in the database. Leave 
the review date as NULL. 
*/

INSERT INTO Rating
SELECT rID, mID, 5, NULL
FROM Reviewer, Movie
WHERE Reviewer.name = "James Cameron";

/*
Q3
*/

UPDATE Movie
SET year = year + 25
WHERE mID in 
	(SELECT mID
	FROM
		(SELECT *, AVG(stars) AS av
		 FROM Rating 
		 GROUP BY mID) AS filter
	WHERE filter.av >= 4) 

/*
Q4 Remove all ratings where the movie's year is before 1970 or after 2000, and the 
rating is fewer than 4 stars. 
*/ 

DELETE FROM Rating
WHERE mID IN (
	SELECT DISTINCT Movie.mID
	FROM Movie
	WHERE Movie.year < 1970 OR Movie.year > 2000)
AND Rating.stars < 4;