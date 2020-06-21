class Article < ApplicationRecord
  belongs_to :auth
	validate :body
  validate :title

  scope :pub_created, -> { order(created_at: :desc) }

end