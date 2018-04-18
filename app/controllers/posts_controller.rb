class PostsController < ApplicationController
  def index; end

  def show
    @post = Post.find(params[:id]).decorate
    @post = PostSerializer.new(@post).serialized_json
  end
end
