class CreateMemes < ActiveRecord::Migration[6.1]
  def change
    create_table :memes do |t|
      t.integer :cat_id
      t.integer :user_id
      t.string :title
      t.string :content
      t.string :font
      t.string :font_color
      t.integer :font_size
      t.integer :x_coord
      t.integer :y_coord

      t.timestamps
    end
  end
end
