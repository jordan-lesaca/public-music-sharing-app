class SongsController < ApplicationController

    def index
      songs = Song.all.order(:year) 
      render json: songs
    end
  
    def show 
      user = User.find(session[:user_id])
      userSong = Song.where(user_id: user)
      render json: userSong
    end
  
    def create
      song = Song.create(song_params)
      render json: song, status: :created
    end
  
    def update
      song = Song.find(params[:id])
      song.update(song_params)
      render json: song
    end
  
    def destroy
      song = Song.find(params[:id])
      song.destroy
    end
  
    private
  
    def song_params
      params.require(:song).permit(:title, :artist, :featured_artist, :genre, :year, :posted_by, :user_id)
    end
  
  end