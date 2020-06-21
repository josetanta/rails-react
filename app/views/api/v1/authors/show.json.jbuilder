if @author
  json.data do
    json.meta :author
    json.unicode "utf-8"
    json.headers "application/json"
    json.author do
        json.name @author.name
        json.email @author.email
        json.articles_publishied @author.articles.count.to_s
        json.articles(@author.articles) do |article|
          json.id article.id
          json.title article.title
          json.body article.body
        end
    end
  end
else
  json.status :error
  json.message "Not Found"
end