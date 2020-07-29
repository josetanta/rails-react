class ApplicationController < ActionController::API
  
  protected
    def current_user
      @user = session[:user]
    end
end
