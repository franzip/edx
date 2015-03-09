class MoviesController < ApplicationController
 
 caches_page :index
 
  def show
    id = params[:id] # retrieve movie ID from URI route
    @movie = Movie.find(id) # look up movie by unique ID
    # will render app/views/movies/show.<extension> by default
  end

  def index
    sort = params[:sort] || session[:sort]
    case sort
    when 'title'
      ordering,@title_header = {:order => :title}, 'hilite'
    when 'release_date'
      ordering,@date_header = {:order => :release_date}, 'hilite'
    end
    @all_ratings = Movie.all_ratings
    @selected_ratings = params[:ratings] || session[:ratings] || {}

    if @selected_ratings == {}
      @selected_ratings = Hash[@all_ratings.map {|rating| [rating, rating]}]
    end
    
    if params[:sort] != session[:sort]
      session[:sort] = sort
      flash.keep
      redirect_to :sort => sort, :ratings => @selected_ratings and return
    end

    if params[:ratings] != session[:ratings] and @selected_ratings != {}
      session[:sort] = sort
      session[:ratings] = @selected_ratings
      flash.keep
      redirect_to :sort => sort, :ratings => @selected_ratings and return
    end
    @movies = Movie.find_all_by_rating(@selected_ratings.keys, ordering,:limit=>10)
  end

  def new
    # default: render 'new' template
  end

  def create
    @movie = Movie.create!(params[:movie])
    flash[:notice] = "#{@movie.title} was successfully created."
    redirect_to movies_path
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    @movie = Movie.find params[:id]
    @movie.update_attributes!(params[:movie])
    flash[:notice] = "#{@movie.title} was successfully updated."
    redirect_to movie_path(@movie)
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy
    flash[:notice] = "Movie '#{@movie.title}' deleted."
    redirect_to movies_path
  end

  def director
    @movie = Movie.find(params[:id])
    @director = @movie.director
    if @director.blank?
      flash[:warning] = "'#{@movie.title}' has no director info"
      redirect_to movies_path and return
    end
    @movies = Movie.find_all_by_director(@director)
  end

  def score
    @movie = Movie.find_by_id(params[:id])
    if @movie.blank?
      flash[:warning] = "#{params[:id]} is an invalid id"
      redirect_to movies_path and return
    end
    @reviews = @movie.reviews
    @score=0 
    @score = @reviews.inject(0){|sum,r| sum+r.score}/@reviews.count unless @reviews.empty?   
  end

  def benchmark
    benchType=params[:type]
    @results=[]
    times_to_run=Movie.count/2
    search_movies=Movie.all(:limit=>times_to_run)
    search_goers=Moviegoer.all(:limit=>times_to_run)
    case benchType

    when "movies"
      start_time=Time.now
      search_movies.each do |bench_movie|
         reviews = bench_movie.reviews 
         reviews.each {|r| r}
      end
      total_time=Time.now - start_time
      @results<<{:action => "movie.reviews", :times_run => times_to_run, :time=>total_time.round(5)}
    when "moviegoers"
      start_time=Time.now     
      search_goers.each do |g|
         reviews = g.reviews 
         reviews.each {|r| r}
      end 
      total_time=Time.now - start_time
      @results<<{:action => "moviegoer.reviews", :times_run => times_to_run, :time=>total_time.round(5)}
    end
  end


  def viewed_with
    @movie = Movie.find_by_id(params[:id])
    if @movie.blank?
      flash[:warning] = "#{params[:id]} is an invalid id"
      redirect_to movies_path and return
    end
  
    @moviegoers=@movie.moviegoers(:include => :reviews)
    @similarMovies=[]
    @moviegoers.each do |mg|
      mg.movies.each do |m|
        @similarMovies << m
      end
    
    end
    @similarMovies.uniq!
   end

  

end
