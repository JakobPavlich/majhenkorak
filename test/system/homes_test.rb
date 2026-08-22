require "application_system_test_case"

class HomesTest < ApplicationSystemTestCase
  # test "visiting the index" do
  #   visit homes_url
  #
  #   assert_selector "h1", text: "Home"
  # end
  test "visiting the home page" do
    visit root_url

    assert_selector "body"
  end

  test "pravi naslov na prvi strani" do
    visit root_url

    assert_selector "h1", text: "MAJHEN KORAK"
  end

  test ".tree in .korak sta prisotna" do
    visit root_url

    assert_selector ".tree"
    assert_selector ".korak"
  end
end
