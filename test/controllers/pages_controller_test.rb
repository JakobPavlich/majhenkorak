require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "korak1 page works" do
    get "/korak/1"

    assert_response :success
  end
end
