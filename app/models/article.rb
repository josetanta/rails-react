class Article < ApplicationRecord
  belongs_to :author
  validates :body , presence: { message: 'El contenido es obligatorio' }
  validates :title, presence: { message: "El titulo debe ser implementada" }

  scope :pub_created, -> { order(created_at: :desc) }
  scope :pub_updated, -> { order(updated_at: :desc) }
end
