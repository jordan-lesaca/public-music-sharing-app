class Song < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites
  
    validates :title, presence: true
    validates :artist, presence: true
    validates :genre, presence: true
    validates :year, presence: true
  end
  