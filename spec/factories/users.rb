FactoryBot.define do
  factory :user do
    first_name            { Faker::Name.first_name }
    last_name             { Faker::Name.last_name }
    email                 { Faker::Internet.email }
    password              { 'password7X!' }
    password_confirmation { password }
    confirmed_at          { Time.current }

    initialize_with { User.find_or_initialize_by(email: email) }
  end
end
