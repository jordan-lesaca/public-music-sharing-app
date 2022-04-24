class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorite_genre, :pronouns, :user_id
  
  belongs_to :user
end
