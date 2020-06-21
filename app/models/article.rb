class Article < ApplicationRecord
  belongs_to :author
	validate :body
  validate :title

  scope :pub_created, -> { order(created_at: :desc) }
  scope :pub_updated, -> { order(updated_at: :desc) }

end