require 'rails_helper'

feature 'Authentication' do
  context 'Sign In' do
    context 'The main page' do
      background { visit root_path }
  
      scenario 'loads the main page and link to "Sign In"' do
        expect(page).to have_link('Sign In', href: new_user_session_path)
      end  
    
      scenario '"Sign In" link opens the form' do
        click_link('Sign In')
        expect(page).to have_css('form#new_user')
      end
    end

    context 'Sign In process' do
      let(:user)       { create(:user, email: email, password: password) }
      let(:email)      { 'john@doe.com' }
      let(:password)   { 'password7X!' }

      background { visit new_user_session_path }
  
      scenario 'loads "Sign Up" link' do
        expect(page).to have_link('sign up', href: new_user_registration_path)
      end
  
      scenario 'loads "Sign Up" link' do
        expect(page).to have_link('Forgot your password?', href: new_user_password_path)
      end

      scenario 'login the user to his account' do
        fill_in 'Email address', with: email
        fill_in 'Password', with: password
        click_on 'Log in'

        expect(page).to have_css('#dashboard-app')
      end
    end
  end
end
