class SongsController < ApplicationController

    def index
        songs = Song.all
        render json: songs
    end

    def show
        songs = song.find(params[:id])
        render json: songs
    end
    
    def create
        song = Song.create(song_params)
        render json: song, status: :created
    end

    private

    def song_params
        params.require(:song).permit(:title, :artist, :featured_artist, :genre, :year, :posted_by, :user_id)
      end

end