class PostsController < ApplicationController
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
    if @post.save
      redirect_to @post, notice: "Objava je bila objavljena"
    else
      render :new, status: :unprocessable_content
    end
  end

  private

  def post_params
    params.expect(post: [ :title, :label, :favnumber, :region, :apply_url, :apply_email ])
  end
end
