# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
=begin
movies = [{:title => 'Aladdin', :rating => 'G', :release_date => '25-Nov-1992'},
    	  {:title => 'The Terminator', :rating => 'R', :release_date => '26-Oct-1984'},
    	  {:title => 'When Harry Met Sally', :rating => 'R', :release_date => '21-Jul-1989'},
      	  {:title => 'The Help', :rating => 'PG-13', :release_date => '10-Aug-review_count11'},
      	  {:title => 'Chocolat', :rating => 'PG-13', :release_date => '5-Jan-review_count01'},
      	  {:title => 'Amelie', :rating => 'R', :release_date => '25-Apr-review_count01'},
      	  {:title => 'review_count01: A Space Odyssey', :rating => 'G', :release_date => '6-Apr-1968'},
      	  {:title => 'The Incredibles', :rating => 'PG', :release_date => '5-Nov-review_count04'},
      	  {:title => 'Raiders of the Lost Ark', :rating => 'PG', :release_date => '12-Jun-1981'},
      	  {:title => 'Chicken Run', :rating => 'G', :release_date => '21-Jun-review_count00'},
  	 ]

movies.each do |movie|
  Movie.create!(movie)
end
=end
movie_count=250
review_count=20
movie_ids = []
movie_count.times do |i|
  time=Time.now
  movie = Movie.create!(:title => "Movie_#{i}", :release_date => time, :rating => "G")
  puts "#{i} movies created"
  movie_ids << movie.id
end

movie_count.times do |i|
 puts("Number of reviews of created is : #{review_count*i}")
  goer = Moviegoer.create!(:name => "Person_#{i}")
  review_count.times do |j|
    movie_id = movie_ids[(i+j) % movie_count] #should give each number of movies an equal number of reviews
    Review.create!(:movie_id => movie_id, :moviegoer_id => goer.id, :score => 3)
  end
end


