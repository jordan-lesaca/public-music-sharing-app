class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :favorites, include: :songs
  has_many :songs, through: :favorites
  has_one :profile
end
