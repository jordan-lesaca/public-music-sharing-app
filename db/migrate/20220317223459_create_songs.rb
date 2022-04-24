class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :featured_artist
      t.string :genre
      t.integer :year
      t.string :posted_by

      t.timestamps
    end
  end
end
