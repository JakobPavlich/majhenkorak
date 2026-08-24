class CreatePosts < ActiveRecord::Migration[8.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :label
      t.integer :favnumber
      t.string :region
      t.string :apply_url
      t.string :apply_email

      t.timestamps
    end
  end
end
