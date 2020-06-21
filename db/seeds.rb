# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

3.times do |num|
  Auth.create(name: "Auth #{num}", username: "Username #{num}", email: "auth#{num}@mail.com")
end


5.times do |num|
  Article.create(title: "Article #{num}", body:"This is body of Article #{num}", auth_id: rand(3).to_i)
end
