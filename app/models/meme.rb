class Meme < ApplicationRecord
    belongs_to :user
    belongs_to :cat

    validates :title, :content, :font, :font_color, :font_size, :text_top, :text_left, presence: true
end
