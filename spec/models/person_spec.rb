require 'rails_helper'

RSpec.describe Person do
  describe 'Validations' do
    let(:person) { build(:person, name: name, email: email) }
    let(:name)   { 'John' }
    let(:email)  { 'john@doe.com' }

    before { person.valid? }

    context 'when valid attributes' do
      it 'is valid' do
        expect(person).to be_valid
      end

      it 'has not errors messages' do
        expect(person.errors.messages).to be_empty
      end
    end

    describe 'Email' do
      context 'when without an email' do
        let(:email) { nil }

        it 'is valid' do
          expect(person).to be_valid
        end

        it 'has nit errors messages' do
          expect(person.errors.messages).to be_empty
        end
      end

      context 'when an incorrect format of email' do
        let(:email) { 'john@doe.c' }

        it 'is not valid' do
          expect(person).not_to be_valid
        end

        it 'has errors messages' do
          expect(person.errors.messages.dig(:email, 0)).to eq 'is invalid'
        end
      end
    end

    describe 'Name' do
      context 'when without a name' do
        let(:name) { nil }

        it 'is not valid' do
          expect(person).not_to be_valid
        end

        it 'has errors messages' do
          expect(person.errors.messages.dig(:name, 0)).to eq 'can\'t be blank'
        end
      end
    end
  end
end
