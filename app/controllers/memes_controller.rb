class MemesController < ApplicationController
before_action :authorize, only: [:create]

    def index
        memes = Meme.all
        render json: memes
    end

    def show
        meme = Meme.find_by(id: params[:id])
        render json: meme, status: :ok
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
        meme = Meme.find_by(id: params[:id])
        meme.update(update_params)
        render json: meme, status: :ok
    end

    def destroy
        meme = Meme.find_by(id: params[:id])
        meme.destroy
        head :no_content
    end

    private
    
    def new_meme_params
        params.permit(:user_id, :cat_id, :title, :content, :font, :font_color, :font_size, :text_top, :text_left, :photo_url)
    end

    def update_params
        params.permit(:title, :content, :font, :font_color, :font_size, :text_top, :text_left)
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
