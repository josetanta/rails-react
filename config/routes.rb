Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :authors, shallow: true do
        resources :articles, except: [:index]
      end
      get '/authors/:author_id/articles', to: 'articles#get_articles_author'
      get '/articles', to: 'articles#index'
    end
  end
end
