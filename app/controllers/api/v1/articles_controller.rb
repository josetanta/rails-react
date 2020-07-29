class Api::V1::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]
  before_action :set_author, only: %i[create articles_author]
  # GET /api/v1/articles
  def index
    @articles = Article.pub_updated.all
  end

  # GET /api/v1/articles/1
  def show
    render :show
  end

  def articles_author
    @articles = @author.articles
    render :author_articles
  end

  # POST /api/v1/articles
  def create
    @article = @author.articles.new(article_params)
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

  def set_author
    @author = Author.find(params[:author_id])
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_article
    @article = Article.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def article_params
    params.require(:article).permit(:title, :body, :author_id)
  end
end
