json.data do
  json.meta :authors
  json.unicode "utf-8"
  json.headers "application/json"
  json.authors(@authors) do |author|
    json.id author.id
    json.email author.email
    json.name author.name
    json.registered author.created_at
    json.articles_count author.articles.count.to_s
    json.articles author.articles
  end
end