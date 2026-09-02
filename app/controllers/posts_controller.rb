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
  end
end
