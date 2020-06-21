class Auth < ApplicationRecord
  has_many :articles, dependent: :destroy
end
