class Admin::PostsController < AdminController
  def index
    @posts = Post.all
    @posts = PostSerializer.new(@posts).serialized_json
  end

  def show
    @post = Post.find(params[:id])
    @post = PostSerializer.new(@post).serialized_json
  end
end
