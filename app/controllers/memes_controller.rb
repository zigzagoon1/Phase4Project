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

    def update

    end

    def destroy
        meme = Meme.find(params[:id])
        meme.destroy
        head :no_content
    end

    private
    
    def new_meme_params
        params.permit(:user_id, :cat_id, :title, :content, :font, :font_color, :font_size, :top_percent, :left_percent, :photo_url)
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
