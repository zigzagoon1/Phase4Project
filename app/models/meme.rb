class Meme < ApplicationRecord
    belongs_to :user
    belongs_to :cat

    validates :user_id, :cat_id, :title, :content, :font, :font_color, presence: true
end
