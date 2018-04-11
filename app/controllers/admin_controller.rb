class AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_admin!

  def authenticate_admin!
    render_404 unless current_user.admin?
  end
end
