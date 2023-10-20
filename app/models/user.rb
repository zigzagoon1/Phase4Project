class User < ApplicationRecord
    has_many :memes
    has_many :cats, through :memes

    validates :name, presence: true
    validates :username, presence: true
end
