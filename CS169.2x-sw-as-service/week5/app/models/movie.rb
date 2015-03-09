class Movie < ActiveRecord::Base
  has_many :reviews  
  has_many :moviegoers, :through => :reviews  

def self.all_ratings
    %w(G PG PG-13 NC-17 R)
  end

  def similar_movies
    Movie.find_all_by_director(self.director)
  end
end
