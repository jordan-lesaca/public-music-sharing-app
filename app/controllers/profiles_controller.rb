class ProfilesController < ApplicationController
    
    def index
      profiles = Profile.all
      render json: profiles
    end
  
    def show 
      profile = Profile.find(params[:id])
      render json: profile
    end
  
    def create 
      profile = Profile.create!(profile_params)
      render json: profile
    end
  
    def update
      profile = Profile.find(params[:id])
      profile.update(profile_params)
      render json: profile
    end
  
    private
  
    def profile_params
      params.permit(:name, :favorite_genre, :pronouns, :user_id)
    end
  
  end