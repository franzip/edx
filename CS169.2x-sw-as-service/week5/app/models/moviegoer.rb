class Moviegoer < ActiveRecord::Base
  validates_presence_of :name
  has_many :reviews
  
  has_many :movies, :through => :reviews
end
