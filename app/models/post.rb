class Post < ApplicationRecord
  validates :title, :label, :favnumber, :region, presence: true
end
