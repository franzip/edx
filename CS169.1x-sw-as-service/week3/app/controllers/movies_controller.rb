class MoviesController < ApplicationController

  def show
    id = params[:id] # retrieve movie ID from URI route
    @movie = Movie.find(id) # look up movie by unique ID
    # will render app/views/movies/show.<extension> by default
  end

  def index
    @all_ratings = Movie.rate_codes
    @selected = 'hilite'
    # store settings
    session[:ratings] = params[:ratings] unless params[:ratings].nil?
    session[:sort] = params[:sort] unless params[:sort].nil?
    if params[:ratings].nil?
      # no box checked: first access (display all movies) or use session data
      session[:ratings].nil? ? @checks = @all_ratings : @checks = session[:ratings]
      # check if sorting is needed
      params[:sort].nil? ? @movies = Movie.all : @movies = Movie.order(params[:sort])
    else
      @checks = params[:ratings]
      # filter movies and apply ordering (don't override user choice with session)
      @movies = Movie.find(:all, :conditions => ["rating IN (?)", params[:ratings].keys],
                           :order => params[:sort] || session[:sort])
    end
    # keep it RESTful
    if (params[:ratings].nil? || params[:sort].nil?) && session[:ratings].present?
      flash.keep
      redirect_to :action => :index, :sort => session[:sort] || "", :ratings => session[:ratings] || ""
    end
# session.clear
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

end
