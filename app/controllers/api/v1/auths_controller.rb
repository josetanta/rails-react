class Api::V1::AuthsController < ApplicationController
  before_action :set_auth, only: [:show, :update, :destroy]

  # GET /auths
  def index
    @auths = Auth.all
  end

  # GET /auths/1
  def show
  end

  # POST /auths
  def create
    @auth = Auth.new(auth_params)

    if @auth.save
      render json: @auth, status: :created, location: @auth
    else
      render json: @auth.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /auths/1
  def update
    if @auth.update(auth_params)
      render json: @auth
    else
      render json: @auth.errors, status: :unprocessable_entity
    end
  end

  # DELETE /auths/1
  def destroy
    @auth.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_auth
      @auth = Auth.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def auth_params
      params.require(:auth).permit(:name, :username, :email)
    end
end
