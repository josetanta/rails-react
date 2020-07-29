class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title, max: 30
      t.text :body
      t.timestamps
      t.index [:title]
    end
  end
end
