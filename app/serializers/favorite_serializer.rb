class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id

  belongs_to :song
end
