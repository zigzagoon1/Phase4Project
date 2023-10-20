class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user #,include: [:cats, :memes]
    end

    def create
        
    end

    def update

    end

    def destroy

    end

end
