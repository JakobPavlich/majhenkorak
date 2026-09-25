class PagesController < ApplicationController
  allow_unauthenticated_access
  def home
  end
  def korak1
    @post = Post.last
  end
  def korak2
  end
end
