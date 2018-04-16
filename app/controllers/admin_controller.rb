class AdminController < ApplicationController
  before_action :authenticate_user!
  before_action :authenticate_admin!

  def authenticate_admin!
    render_404 unless current_user.admin?
  end

  private

  def authenticate_user!
    if admin_user_signed_in?
      super
    else
      redirect_to admin_user_session_url, alert: 'You must sign in'
    end
  end
end
