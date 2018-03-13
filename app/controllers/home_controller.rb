class HomeController < ApplicationController
  def index
    @posts = Post.all.order(:created_at).decorate
    @posts = PostSerializer.new(@posts).serialized_json
  end
end
