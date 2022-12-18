require 'rails_helper'

describe 'Authentication' do
  context 'Sign In' do
    context 'The main page' do
      before { visit root_path }

      it 'loads the main page and link to "Sign In"' do
        expect(page).to have_link('Sign In', href: new_user_session_path)
      end

      it '"Sign In" link opens the form' do
        click_link('Sign In')
        expect(page).to have_css('form#new_user')
      end
    end

    context 'Sign In process' do
      let!(:user)    { create(:user, email: email, password: password) }
      let(:email)    { 'john@doe.com' }
      let(:password) { 'password7X!' }

      before { visit new_user_session_path }

      it 'loads "Sign Up" link' do
        expect(page).to have_link('sign up', href: new_user_registration_path)
      end

      it 'loads "Sign Up" link' do
        expect(page).to have_link('Forgot your password?', href: new_user_password_path)
      end

      it 'login the user to his account' do
        fill_in 'Email address', with: email
        fill_in 'Password', with: password
        click_on 'Log in'

        expect(page).to have_css('#dashboard-app')
      end
    end
  end
end
