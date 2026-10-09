class Subscriber < ApplicationRecord
  validates :email, presence: true

  generates_token_for :unsubscribe

  def self.send_weekly_summary
    posts = Post.where(created_at: 1.week.ago..)
    find_each do
      SubscriberMailer.with(
        subscriber: it,
        posts: posts
      ).weekly_summary.deliver_later
    end
  end
end
