class RemoveUsernameFromAuthors < ActiveRecord::Migration[6.0]
  def change
    remove_column :authors, :username, :string
  end
end
