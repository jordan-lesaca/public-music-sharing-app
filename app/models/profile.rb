class Profile < ApplicationRecord
    belongs_to :user
    
    validates :name, length: { minimum: 2 }
    validates :name, presence: true
  end