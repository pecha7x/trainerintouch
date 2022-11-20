require 'rails_helper'

RSpec.describe User do
  describe 'Validations' do
    let(:user)       { build(:user, email: email, password: password, first_name: first_name) }
    let(:email)      { 'john@doe.com' }
    let(:password)   { 'password7X!' }
    let(:first_name) { 'John' }

    before { user.valid? }

    context 'when valid attributes' do
      it 'is valid' do
        expect(user).to be_valid
      end

      it 'has not errors messages' do
        expect(user.errors.messages).to be_empty
      end
    end

    describe 'Email' do
      context 'when without an email' do
        let(:email) { nil }

        it 'is not valid' do
          expect(user).not_to be_valid
        end

        it 'has errors messages' do
          expect(user.errors.messages.dig(:email, 0)).to eq 'can\'t be blank'
        end
      end

      context 'when an incorrect format of email' do
        let(:email) { 'john@doe.c' }

        it 'is not valid' do
          expect(user).not_to be_valid
        end

        it 'has errors messages' do
          expect(user.errors.messages.dig(:email, 0)).to eq 'is invalid'
        end
      end
    end

    describe 'Password' do
      context 'when without an password' do
        let(:password) { nil }

        it 'is not valid' do
          expect(user).not_to be_valid
        end

        it 'has errors messages' do
          expect(user.errors.messages.dig(:password, 0)).to eq 'can\'t be blank'
        end
      end

      context 'when an incorrect format of password' do
        let(:password) { '12345678' }

        it 'is not valid' do
          expect(user).not_to be_valid
        end

        it 'has errors messages' do
          expect(user.errors.messages.dig(:password, 0))
            .to eq 'Complexity requirement not met. Length should be 8-70 characters and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character'
        end
      end
    end

    describe 'Name' do
      context 'when without an first name' do
        let(:first_name) { nil }

        it 'is not valid' do
          expect(user).not_to be_valid
        end

        it 'has errors messages' do
          expect(user.errors.messages.dig(:first_name, 0)).to eq 'can\'t be blank'
        end
      end
    end
  end
end
