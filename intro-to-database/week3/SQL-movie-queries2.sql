/*
Q1 For each movie, return the title and the 'rating spread', that is, the 
difference between highest and lowest ratings given to that movie. Sort by 
rating spread from highest to lowest, then by movie title. 
*/

SELECT title, spread
FROM Movie, (
	SELECT mID, MAX(stars) - MIN(stars) AS spread
	FROM Rating
	GROUP BY mID
	) AS Rspread
WHERE Movie.mID = Rspread.mID
ORDER BY spread DESC, title;

/*
Q2 Find the difference between the average rating of movies released before 1980 
and the average rating of movies released after 1980. (Make sure to calculate the 
average rating for each movie, then the average of those averages for movies before
1980 and movies after. Don't just calculate the overall average rating before 
and after 1980.) 
*/

SELECT AVG(pre80.movie_avg) - AVG(post80.movie_avg) AS avg_difference
FROM (
	SELECT Movie.mId, AVG(stars) AS movie_avg
	FROM Movie, Rating
	WHERE Movie.mID = Rating.mID
	AND year <= 1980
	GROUP BY Rating.mID
) AS pre80,
(
	SELECT Movie.mId, AVG(stars) AS movie_avg
	FROM Movie, Rating
	WHERE Movie.mID = Rating.mID
	AND year > 1980
	GROUP BY Rating.mID
) AS post80;

/*
Q3 Some directors directed more than one movie. For all such directors, return 
the titles of all movies directed by them, along with the director name. Sort by 
director name, then movie title. (As an extra challenge, try writing the query 
both with and without COUNT.) 
*/

SELECT M1.title, M2.director
FROM Movie M1, Movie M2
WHERE M1.director = M2.director AND M1.title != M2.title
ORDER BY M1.director, M1.title;

/*
Q4 Find the movie(s) with the highest average rating. Return the movie title(s) 
and average rating. (Hint: This query is more difficult to write in SQLite than 
other systems; you might think of it as finding the highest average rating and 
then choosing the movie(s) with that average rating.) 
*/

SELECT title, group_avg
FROM Movie, 
(
  SELECT MAX(group_avg) AS max_avg
  FROM Movie, (
		SELECT Movie.mID, AVG(stars) AS group_avg
		FROM Rating, Movie
		WHERE Rating.mID = Movie.mID
		GROUP BY Rating.mID
		) AS Ranking
  WHERE Ranking.mID = Movie.mID
) AS MaxRating,
(
  SELECT Movie.mID, AVG(stars) AS group_avg
  FROM Rating, Movie
  WHERE Rating.mID = Movie.mID
  GROUP BY Rating.mID
) AS Ranking
WHERE Ranking.group_avg = MaxRating.max_avg
AND Movie.mID = Ranking.mID;

/*
Q5 Find the movie(s) with the lowest average rating. Return the movie title(s) 
and average rating. (Hint: This query may be more difficult to write in SQLite 
than other systems; you might think of it as finding the lowest average rating and 
then choosing the movie(s) with that average rating.) 
*/

SELECT title, group_avg
FROM Movie, 
(
  SELECT MIN(group_avg) AS max_avg
  FROM Movie, (
		SELECT Movie.mID, AVG(stars) AS group_avg
		FROM Rating, Movie
		WHERE Rating.mID = Movie.mID
		GROUP BY Rating.mID
		) AS Ranking
  WHERE Ranking.mID = Movie.mID
) AS MaxRating,
(
  SELECT Movie.mID, AVG(stars) AS group_avg
  FROM Rating, Movie
  WHERE Rating.mID = Movie.mID
  GROUP BY Rating.mID
) AS Ranking
WHERE Ranking.group_avg = MaxRating.max_avg
AND Movie.mID = Ranking.mID;

/*
Q6 For each director, return the director's name together with the title(s) of 
the movie(s) they directed that received the highest rating among all of their 
movies, and the value of that rating. Ignore movies whose director is NULL.
*/

SELECT director, title, MAX(stars) AS highest_rating
FROM Movie, Rating
WHERE Movie.mID = Rating.mID and director IS NOT NULL
GROUP BY director;