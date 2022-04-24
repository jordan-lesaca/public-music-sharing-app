class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :error_response
  
    def index 
      user = User.find(session[:user_id])
      favorites = Favorite.where(user_id: user)
      render json: favorites
    end
  
    def show
      favorite = Favorite.find(params[:id])
      render json: favorite
    end
  
    def create
      favorite = Favorite.create!(favorite_params)
      render json: favorite, status: :created
    end
  
    def update
      favorite = Favorite.find(params[:id])
      song.update(favorite_params)
      render json: favorite
    end
  
    def destroy
      favorite = Favorite.find_by(id: params[:id])
      favorite.destroy
      head :no_content
    end
  
    private
  
    def error_response(invalid)
      render json: {errors: "Song has already been favorited" }, status: :unprocessable_entity
    end
      
    def favorite_params
      params.require(:favorite).permit(:id, :user_id, :song_id)
    end
  
  end