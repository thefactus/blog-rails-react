class PostsController < ApplicationController
  def index
    @posts = Post.all
    @posts = PostSerializer.new(@posts).serialized_json
  end
end
