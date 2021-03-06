class Api::CommentsController < ApplicationController
    def index 
        @comments = Comment.includes(:author).all 
        render :index
    end
    
    def create 
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.photo_id = params[:photo_id]
        
        if @comment.save 
            @photo = @comment.photo 
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
            @photo = @comment.photo 
            render 'api/photos/show'
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @photo = @comment.photo
        @user = current_user
        @comment.destroy 

        # render json: @photo, include: [:comments]
        # render 'api/photos/show'
        render :show
    end

    private
    def comment_params
       params.require(:comment).permit(:body) 
    end
end
