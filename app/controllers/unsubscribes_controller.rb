class UnsubscribesController < ApplicationController
  allow_unauthenticated_access
  before_action :set_subscriber

  def show
  end

  def destroy
    @subscriber.destroy
    redirect_to posts_path, notice: "Odjavljeni ste bili od prejemanja objav na mail"
  end

  private

  def set_subscriber
    @subscriber = Subscriber.find_by_token_for!(:unsubscribe, params[:token])
  rescue ActiveRecord::RecordNotFound
    redirect_to posts_path, alert: "Invalid unsubscribe token"
  end
end
