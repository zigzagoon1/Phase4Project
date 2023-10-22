class CatsController < ApplicationController

    def index
        cats = Cat.all
        render json: cats
    end

    def show
        
    end
end
