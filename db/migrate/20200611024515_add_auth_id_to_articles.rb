class AddAuthIdToArticles < ActiveRecord::Migration[6.0]
  def change
    add_reference :articles, :auth, foreign_key: true
  end
end
