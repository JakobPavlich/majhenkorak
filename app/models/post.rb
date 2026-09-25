class Post < ApplicationRecord
  belongs_to :user, optional: true

  has_rich_text :description
  validates :title, :label, :favnumber, :region, presence: true
  # validates :apply_url, presence: true, unless: :apply_email?
  # validates :apply_email, presence: true, unless: :apply_url?
  validate :has_apply_method

  def has_apply_method
    errors.add(:base, "Please provide an apply URL or email") unless apply_url? || apply_email?
  end

  # to_param :title
  # to_param :title_and_label

  def to_param
  [ id, title, "iz oznake", label ].join("-").parameterize
  end
end
