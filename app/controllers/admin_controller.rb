class AdminController < ApplicationController
  before_action :authenticate_admin_user!

  private

  def authenticate_admin_user!
    if admin_user_signed_in? && current_admin_user.admin?
      super
    else
      redirect_to admin_user_session_url, alert: 'You must sign in'
    end
  end
end
