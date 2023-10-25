class MemesController < ApplicationController
before_action :authorize, only: [:create]

    def index
        memes = Meme.all
        render json: memes
    end


    def create
        meme = Meme.create!(new_meme_params)
        if meme.valid?
            render json: meme, status: :created

        else
            render json: {errors: new_meme.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def new_meme_params
        params.permit(:user_id, :cat_id, :title, :content, :font, :font_color, :font_size, :y_coord, :x_coord)
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
