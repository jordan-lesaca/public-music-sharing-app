# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Chronx")
user2 = User.create(username: "Tutu")
user3 = User.create(username: "Kai")
user4 = User.create(username: "Airwrecka")
user5 = User.create(username: "Miramotown")
user6 = User.create(username: "Kribble")

# profile1 = Profile.create(name: "Jay", favorite_genre: "Folk", pronouns: "He/Him", user_id: 1)
# profile2 = Profile.create(name: "Tu", favorite_genre: "Pop", pronouns: "He/Him", user_id: 2)
# profile3 = Profile.create(name: "Kai", favorite_genre: "EDM", pronouns: "He/Him They/Them", user_id: 3)
# profile4 = Profile.create(name: "Erika", favorite_genre: "Indie", pronouns: "She/Her", user_id: 4)
# profile5 = Profile.create(name: "Izzy", favorite_genre: "KPop", pronouns: "They/Them", user_id: 5)
# profile6 = Profile.create(name: "Cid", favorite_genre: "Alternative", pronouns: "He/Him", user_id: 6)

song1 = Song.create(title: "Fast Car", artist: "Tracy Chapman", featured_artist: "", genre: "Folk", year: 1988, user_id: 1, posted_by: "Chronx")
song2 = Song.create(title: "Its Ok", artist: "Nightbirde", featured_artist: "", genre: "Pop", year: 2020, user_id: 2, posted_by: "Tutu")
song3 = Song.create(title: "Shelter", artist: "Porter Robinson", featured_artist: "Madeon", genre: "EDM", year: 2016, user_id: 3, posted_by: "Kay")
song4 = Song.create(title: "Monster", artist: "Meg & Dia", featured_artist: "", genre: "Indie", year: 2006, user_id: 4, posted_by: "Airwrecka")
song5 = Song.create(title: "그리워해요(Missing You)", artist: "2ne1", featured_artist: "", genre: "KPop", year: 2010, user_id: 5, posted_by: "Miramotown")
song6 = Song.create(title: "Boulevard of Broken Dreams", artist: "Greenday", featured_artist: "", genre: "Alternative", year: 2004, user_id: 6, posted_by: "Kribble")

# favorites1 = Favorite.create(user_id: 1, song_id: 1)
# favorites2 = Favorite.create(user_id: 2, song_id: 2)
# favorites3 = Favorite.create(user_id: 3, song_id: 3)
# favorites4 = Favorite.create(user_id: 4, song_id: 4)
# favorites5 = Favorite.create(user_id: 5, song_id: 5)
# favorites6 = Favorite.create(user_id: 6, song_id: 6)