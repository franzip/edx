/*
Q1 Find the names of all reviewers who rated Gone with the Wind. 
*/

SELECT name
FROM Reviewer, 
(
	SELECT DISTINCT Movie.mID, Rating.rID
	FROM Movie JOIN Rating USING(mID)
	WHERE Movie.title = "Gone with the Wind"
) AS ID
WHERE ID.rID = Reviewer.rID;

/*
Q2 For any rating where the reviewer is the same as the director of the movie, 
return the reviewer name, movie title, and number of stars. 
*/

SELECT Reviewers.name, Movies.title, Ratings.stars 
FROM Movie Movies, Reviewer Reviewers, Rating Ratings 
WHERE Movies.mID = Ratings.mID AND Reviewers.rID = Ratings.rID 
	  AND Movies.director = Reviewers.name;

/*
Q3 Return all reviewer names and movie names together in a single list, 
alphabetized. (Sorting by the first name of the reviewer and first word in the 
title is fine; no need for special processing on last names or removing "The".) 
*/

SELECT Reviewer.name
FROM Reviewer
UNION
SELECT Movie.title
FROM Movie
ORDER BY name;

/*
Q4 Find the titles of all movies not reviewed by Chris Jackson. 
*/

SELECT title
FROM Movie
WHERE mID NOT IN 
(
	SELECT mID
	FROM Rating
	WHERE rID IN (
		SELECT rID
		FROM Reviewer
		WHERE NAME = "Chris Jackson")
);

/*
Q5 For all pairs of reviewers such that both reviewers gave a rating to the same 
movie, return the names of both reviewers. Eliminate duplicates, don't pair 
reviewers with themselves, and include each pair only once. For each pair, return 
the names in the pair in alphabetical order. 
*/

SELECT pairs.lname, pairs.rname
FROM
(SELECT DISTINCT lcolumn.name AS lname, lcolumn.rID AS lid, rcolumn.name AS rname, 
	rcolumn.rID as rid
FROM
	(SELECT R1.name, R1.rID
	FROM Reviewer R1
	ORDER BY R1.name) AS lcolumn
	JOIN
	(SELECT R2.name, R2.rID
	FROM Reviewer R2
	ORDER BY R2.name
	) AS rcolumn
	WHERE lcolumn.name < rcolumn.name) AS pairs,
(SELECT DISTINCT R1.rID AS ID1, R2.rID AS ID2
FROM Rating R1, Rating R2
WHERE R1.rID != R2.rID AND R1.mID = R2.mID
) AS ids
WHERE (pairs.lid = ids.ID1 AND pairs.rid = ids.ID2);

/*
Q6 For each rating that is the lowest (fewest stars) currently in the database, 
return the reviewer name, movie title, and number of stars. 
*/

SELECT Reviewer.name, Movie.title, filter.stars
FROM Movie, Reviewer,
(SELECT rID, mID, stars
FROM Rating R1
WHERE NOT EXISTS (SELECT * 
				  FROM Rating R2
				  WHERE R2.stars < R1.stars)
) AS filter
WHERE Movie.mID = filter.mID AND Reviewer.rID = filter.rID;