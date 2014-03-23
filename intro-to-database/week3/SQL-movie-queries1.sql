/*
Q1 Find the titles of all movies directed by Steven Spielberg. 
*/

SELECT title
FROM movie
WHERE director = "Steven Spielberg";

/*
Q2 Find all years that have a movie that received a rating of 4 or 5, and 
sort them in increasing order. 
*/

SELECT DISTINCT year
FROM Movie, Rating
WHERE Movie.mID = Rating.mID AND stars >= 4;

/*
Q3 Find the titles of all movies that have no ratings. 
*/

SELECT DISTINCT title
FROM Movie, Rating
WHERE Movie.mID not IN (SELECT mID FROM Rating);

/*
Q4 Some reviewers didn't provide a date with their rating. Find the names of 
all reviewers who have ratings with a NULL value for the date. 
*/

SELECT DISTINCT name
FROM Reviewer, Rating
WHERE ratingDate IS NULL AND Reviewer.rID = Rating.rID; 

/*
Q5 Write a query to return the ratings data in a more readable format: 
reviewer name, movie title, stars, and ratingDate. Also, sort the data, first 
by reviewer name, then by movie title, and lastly by number of stars. 
*/

SELECT DISTINCT name AS reviewer_name, title AS movie_title, stars, ratingDate
FROM Movie, Reviewer, Rating
WHERE Reviewer.rID = Rating.rID AND Movie.mID = Rating.mID
ORDER BY reviewer_name, movie_title, stars;

/*
Q6 For all cases where the same reviewer rated the same movie twice and gave it 
a higher rating the second time, return the reviewer's name and the title of the
movie. 
*/

SELECT DISTINCT Reviewer.name, Movie.title
FROM Rating R1, Rating R2, Reviewer, Movie
WHERE R1.rID = R2.rID AND R1.mID = R2.mID AND 
R2.stars > R1.stars AND R2.ratingDate > R1.ratingDate AND
Reviewer.riD = R1.rID AND Movie.mID = R1.mID;

/*
Q7 For each movie that has at least one rating, find the highest number of stars 
that movie received. Return the movie title and number of stars. Sort by movie title. 
*/ 

SELECT Movie.title, MAX(Rating.stars) 
FROM Movie, Rating
WHERE Movie.mID = Rating.mID 
GROUP BY Movie.title ORDER BY Movie.title; 

/*
Q8 List movie titles and average ratings, from highest-rated to lowest-rated. 
If two or more movies have the same average rating, list them in alphabetical order. 
*/

SELECT Movie.title, AVG(Rating.stars) as avg_rating
FROM Movie, Rating
WHERE Movie.mID = Rating.mID
GROUP BY Movie.title ORDER BY avg_rating DESC;

/*
Q9 Find the names of all reviewers who have contributed three or more ratings. 
(As an extra challenge, try writing the query without HAVING or without COUNT.) 
*/

SELECT NAME
FROM Rating JOIN Reviewer USING(rID)
GROUP BY rID
HAVING COUNT(*) >= 3;

