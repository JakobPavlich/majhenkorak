class Post < ApplicationRecord
  validates :title, :label, :favnumber, :region, presence: true
  # validates :apply_url, presence: true, unless: :apply_email?
  # validates :apply_email, presence: true, unless: :apply_url?
  validate :has_apply_method

  def has_apply_method
    errors.add(:base, "Please provide an apply URL or email") unless apply_url? || apply_email?
  end
end
