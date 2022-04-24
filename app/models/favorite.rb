class Favorite < ApplicationRecord
    belongs_to :song
    belongs_to :user
    
    validates_uniqueness_of :user_id, scope: [:song_id]
  end
  