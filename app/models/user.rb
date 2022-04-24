class User < ApplicationRecord  
    has_many :favorites, dependent: :destroy
    has_many :songs, through: :favorites
    has_one :profile, dependent: :destroy
  
    validates :username, presence: true
    validates :username, uniqueness: true
  end
  