module ControllerConcern
  extend ActiveSupport::Concern
  def current_user
    @user = session[:user]
  end  
end