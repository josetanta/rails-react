if @article
  json.data do
    json.meta :article
    json.unicode "utf-8"
    json.headers "application/json"
    json.article do
        json.id @article.id
        json.title @article.title
        json.body @article.body
        json.publishied @article.created_at
        json.auth do
          json.name @article.auth.name
          json.username @article.auth.username
        end
    end
  end
else
  json.status :error
  json.message "Not Found"
end