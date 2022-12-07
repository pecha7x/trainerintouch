FactoryBot.define do
  factory :person do
    name   { Faker::Name.name }
    phone  { Faker::PhoneNumber.phone_number }
    email  { Faker::Internet.email }
    gender { 0 }
    dob    { Faker::Date.birthday }
  end
end
