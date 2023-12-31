class User < ApplicationRecord
    has_secure_password

    has_many :memes
    has_many :cats, -> { distinct }, through: :memes

    validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
end
