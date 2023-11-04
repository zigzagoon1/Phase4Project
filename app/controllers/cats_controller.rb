class CatsController < ApplicationController

    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        if cat.valid? 
            render json: cat, status: :created
        else
            render json: {errors: cat.errors.full_messages}
        end
    end


    private

    def cat_params
        params.permit(:name, :photo_url, :alt)
    end

end
