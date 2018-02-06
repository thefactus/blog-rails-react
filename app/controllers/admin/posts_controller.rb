class Admin::PostsController < AdminController
  def index
    posts = Post.all
    json_string = PostSerializer.new(posts).serialized_json

    respond_to do |format|
      format.html
      format.json { render json: json_string }
    end
  end
end
