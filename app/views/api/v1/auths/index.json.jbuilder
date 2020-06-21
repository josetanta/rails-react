json.data do
  json.meta :auths
  json.unicode "utf-8"
  json.headers "application/json"
  json.auths(@auths) do |auth|
    json.username auth.username
    json.email auth.email
    json.registered auth.created_at
  end
end