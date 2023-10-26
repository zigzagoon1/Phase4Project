class UsersController < ApplicationController
    before_action :authorize, only: [:show, :update, :destroy]
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: [:cats, :memes]
    end

    # def create
    #     user = User.create!(user_create_params)
    #     if user.valid?
    #         session[:user_id] = user.id
    #         render json: user, status: :created
    #     else
    #         render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    #     end
    # end
    def create
        user = User.create!(user_create_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def update

    end

    def destroy

    end

    private

    def user_create_params
        puts params.inspect
        params.permit(:name, :username, :password, :password_confirmation)
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unathorized unless session.include? :user_id
    end

    def render_invalid_response
        render json: {error: "Username taken"}, status: :unprocessable_entity
    end

end
