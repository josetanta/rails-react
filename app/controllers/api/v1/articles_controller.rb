class Api::V1::ArticlesController < ApplicationController
	before_action :set_article, only: [:show, :update, :destroy]

	# GET /api/v1/articles
	def index
		@articles = Article.pub_created.all
	end

	# GET /api/v1/articles/1
	def show
		render :show
	end

	# POST /api/v1/articles
	def create
		@article = Article.new(article_params)
		puts "-----------------------#{@article.valid?}------------------------"
		if @article.save
			render json: @article, status: :created
		else
			render json: @article.errors, status: :unprocessable_entity
		end
	end

	# PATCH/PUT /api/v1/articles/1
	def update
		if @article.update(article_params)
			render json: @article
		else
			render json: @article.errors, status: :unprocessable_entity
		end
	end

	# DELETE /api/v1/articles/1
	def destroy
		@article.destroy
	end

	private
		# Use callbacks to share common setup or constraints between actions.
		def set_article
			@article = Article.find(params[:id])
		end

		# Only allow a trusted parameter "white list" through.
		def article_params
			params.require(:article).permit(:title, :body, :auth_id)
		end
end
