class Review < ActiveRecord::Base
  validates_presence_of :movie_id
  validates_presence_of :moviegoer_id
  belongs_to :movie
  belongs_to :moviegoer
  validates_inclusion_of :score, :in => [0,1,2,3,4,5]
end
