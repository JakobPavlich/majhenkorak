class PagesController < ApplicationController
  def home
  end
  def korak1
    @post = Post.last
  end
  def korak2
  end
end
