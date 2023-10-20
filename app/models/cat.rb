class Cat < ApplicationRecord
    has_many :memes
    has_many :users, through: :memes

    validates :photo_url, presence: true
    validates :photo_url, uniqueness: true
    validates :alt, presence: true
end
