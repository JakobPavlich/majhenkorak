require "test_helper"

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "validates apply url or email is present" do
    post = Post.new apply_url: "https://gorails.com"
    post.valid?
    assert_empty post.errors[:base]

    post = Post.new apply_email: "hd@gorails.com"
    post.valid?
    assert_empty post.errors[:base]

    post = Post.new
    post.valid?
    assert_includes post.errors[:base], "Please provide an apply URL or email"
  end
end
