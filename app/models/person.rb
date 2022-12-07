# == Schema Information
#
# Table name: people
#
#  id     :bigint           not null, primary key
#  name   :string           default(""), not null
#  phone  :string
#  email  :string
#  gender :integer          default(0)
#  dob    :date
#
class Person < ApplicationRecord
  # include Discard::Model

  has_paper_trail

  validates :email, length: { maximum: 255 }, email: true, allow_blank: true
  validates :name, length: { maximum: 50 }, presence: true
end
