if @auth
  json.data do
    json.meta :auth
    json.unicode "utf-8"
    json.headers "application/json"
    json.auth do
        json.name @auth.name
        json.username @auth.username
        json.articles_publishied @auth.articles.count.to_s
        json.articles(@auth.articles) do |article|
          json.title article.title
          json.body article.body
        end
    end
  end
else
  json.status :error
  json.message "Not Found"
end