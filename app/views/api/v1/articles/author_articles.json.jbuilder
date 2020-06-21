if @articles
  json.data do
    json.meta :articles
    json.unicode "utf-8"
    json.headers "application/json"
    json.articles(@articles) do |article|
      json.id article.id
      json.title article.title
      json.body article.body
      json.publishied article.created_at
    end
  end
else
  json.status :error
  json.message "Not Found"
end