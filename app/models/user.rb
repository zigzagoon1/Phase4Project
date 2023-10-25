class User < ApplicationRecord
    has_secure_password

    has_many :memes
    has_many :cats, through: :memes

    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :cats, uniqueness: true
end
