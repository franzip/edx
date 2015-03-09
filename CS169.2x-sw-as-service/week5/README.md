Overview
=======

You have been assigned to improve the database performance of a new version of the Rotten Potatoes site.

Setup:
----

Clone this repository and cd inside it

Now run:

```
bundle install --without production
rake db:create
rake db:migrate
```

and

```
rake db:seed
``` 

The seed command may take a while as it generates roughly 5000 database entries. If the seed command is taking too long, consider lowering the amount of data that it creates by changing the following lines of db/seeds.rb:

movie_count=250  
review_count=20  

This version of the app has some changes:

Review and Moviegoer models have been added.
Take a look at the model files in /app/models/ to get a better understanding of the relationship between the models. Note that:

* Movie has many Reviews.
* Movie has many Moviegoers through Reviews.
* Moviegoer has many Reviews.
* Moviegoer has many Movies through Reviews.

New features for users in various stages of completion:
Implemented:

* A user can now view the average score for a film. Handled by Moviescontroller#score
* A user can now view all films reviewed by the reviewers of a given film. Handled by Moviescontroller#viewed_with

Planned:
* A user should be able to see all of a Moviegoer's Reviews
* 
This will involve a query that looks like moviegoer.reviews
Unfortunately, the way that the prototype database is set up will prevent these great new features from scaling very well. As the number of Reviews grows, the performance will drop significantly.

To help you document the performance of the queries the designer has added a benchmarking action that will provide a very rough estimate of query performance. You can get an approximate idea of how long some sample queries take for a small data set by starting up the server and then visiting:

http://localhost:3000/benchmark/movies

or

http://localhost:3000/benchmark/moviegoers

Take a look at the code in app/controller/movies_controller.rb to see how the preceding commands work. There are a few things to take note of:

These times are approximations, there is significant overhead caused by loading ActiveRecord objects, so the time spent executing queries is not the same as the time displayed on the page.
The database may not contain enough movies for these to show significant improvements after you apply migrations to improve the query performance.

If you wish to see the time spent running database queries, look at the terminal running the rails server and look for a line that looks like:
Completed 200 OK in 423ms 
(Views: 8.0ms | ActiveRecord: 200.0ms)

The time after ActiveRecord is a better approximation of the actual query time.
A more qualitative method to evaluate performance is to look at what your database's query planner will use to execute the queries. If you are running the virtual machine you can do this by running commands:

```
cd db
sqlite3 development.sqlite3
```

you should see a prompt that looks like:

sqlite>
If you want to see the plan that sqlite3 expects to use, along with its estimation of the number of rows that it will look through, run:

EXPLAIN QUERY PLAN <query>;
with <query> replaced by the query you want to investigate. The score action uses

@movie.reviews
this gets translated to the query:

SELECT "reviews".* FROM "reviews" WHERE "reviews"."movie_id" = 1;
putting this all together you can see the estimated number of rows viewed by typing in:

explain query plan SELECT "reviews".* FROM "reviews" WHERE "reviews"."movie_id" = 1;
You will get a result that looks like:

SCAN TABLE reviews (~# rows)
The number of rows is an approximation, but it is useful for comparing performance between different schema. The skeleton code performs a Table Scan to execute this query. This is one of the reasons that the current implementation will lose performance as the amount of Reviews grows.


Requirements
-----


Your task is to add a migration, or migrations that will improve the performance by eliminate the use of table scans for the following two queries:

moviegoer.reviews

and

movie.reviews

Note: In the previous two queries, moviegoer and movie are instances of the Moviegoer and Movie models. Note: This should not require very much code, in fact adding 2 indices is enough to prevent table scans from occurring for these queries. 

To easily create a migration run the following command:

```
rails generate migration migrationName
```
 
To read more about migrations visit: http://guides.rubyonrails.org/migrations.html After you have added your migrations, make sure to run

```
rake db:migrate
```

to make sure they get applied to the database. Check your results either by using sqlite3, or the benchmark action to see if you are getting better results. If you use the benchmark action It may be necessary to add more Reviews to make this noticeable.You can modify db/seeds.rb to do so. A successful change should eliminate table scans for both of the queries.
