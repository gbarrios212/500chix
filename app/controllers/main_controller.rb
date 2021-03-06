class MainController < ApplicationController
  before_action :force_json, only: :search

    def index; 
    end

    def search
        # debugger
        @users = User.ransack(username_cont: params[:q]).result(distinct: true).limit(5)
        @photos = Photo.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
    end

    private
    def force_json  
        request.format = :json
    end
end