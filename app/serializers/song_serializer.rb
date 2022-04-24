class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :featured_artist, :genre, :year, :posted_by, :user_id

  has_many :favorites
end
