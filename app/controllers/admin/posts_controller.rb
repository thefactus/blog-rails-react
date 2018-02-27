class Admin::PostsController < AdminController
  def index
    @posts = Post.all
    @posts = PostSerializer.new(@posts).serialized_json
  end

  def show
    @post = Post.find(params[:id])
    @post = PostSerializer.new(@post).serialized_json
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to [:admin, @post]
    else
      render 'new'
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
