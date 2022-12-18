require 'rails_helper'

describe 'Authentication' do
  context 'when an user try to Sign In' do
    context 'when this goes from the main page' do
      before { visit root_path }

      it 'loads the main page and link to "Sign In"' do
        expect(page).to have_link('Sign In', href: new_user_session_path)
      end

      it '"Sign In" link opens the form' do
        click_link('Sign In')
        expect(page).to have_css('form#new_user')
      end
    end

    context 'when opens "Sign In" form' do
      let(:email)    { 'john@doe.com' }
      let(:password) { 'password7X!' }

      before do
        create(:user, email: email, password: password)
        visit new_user_session_path
      end

      it 'loads "Sign Up" link' do
        expect(page).to have_link('sign up', href: new_user_registration_path)
      end

      it 'loads "Forgot password" link' do
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

  context 'when opens "Sign Up" form' do
    let(:first_name) { 'John' }
    let(:last_name)  { 'Smith' }
    let(:email)      { 'john@smith.com' }
    let(:password)   { 'password7X!' }

    before { visit new_user_registration_path }

    it 'loads "Sign In" link' do
      expect(page).to have_link('sign in', href: new_user_session_path)
    end

    it 'loads "Check Confirm Instructions" link' do
      expect(page).to have_link('Didn\'t receive confirmation instructions?', href: new_user_confirmation_path)
    end

    it 'login the user to his account' do
      fill_in 'First name',            with: first_name
      fill_in 'Last name',             with: last_name
      fill_in 'Email address',         with: email
      fill_in 'Password',              with: password
      fill_in 'Password confirmation', with: password
      click_on 'Sign up'

      expect(page).to have_text('A message with a confirmation link has been sent to your email address')
    end
  end
end
