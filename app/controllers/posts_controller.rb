require "net/http"
require "json"

class PostsController < ApplicationController
  before_action :set_post, only: [ :show, :edit, :update, :destroy ]

  def index
    @posts = Post.all
  end
  def show
    params[:id]
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    unless turnstile_valid?
      flash.now[:alert] = "Preverjanje Turnstile ni uspelo. Poskusite znova."
      return render :new, status: :unprocessable_content
    end
    if @post.save
      redirect_to @post, notice: "Objava je bila objavljena"
    else
      render :new, status: :unprocessable_content
    end
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: "Objava je bila uspešno spremenjena"
    else
      render :edit, status: :unprocessable_content
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: "Objava je bila izbrisana"
  end


  private

  def turnstile_valid?
    token = params["cf-turnstile-response"]

    return false if token.blank?
    uri = URI("https://challenges.cloudflare.com/turnstile/v0/siteverify")

    response = Net::HTTP.post_form(
        uri,
        {
          "secret" => ENV.fetch("TURNSTILE_SECRET_KEY"),
          "response" => token
        }
    )

    JSON.parse(response.body)["success"] == true
  end

  def post_params
    params.expect(post: [ :title, :label, :favnumber, :region, :apply_url, :apply_email, :description ])
  end

  def set_post
    @post = Post.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to posts_path
  end
end
