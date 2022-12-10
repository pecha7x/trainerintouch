require 'rails_helper'

RSpec.describe 'Api::V1::People' do
  describe 'GET /index' do
    let!(:people) { create_list(:person, 3) }

    before { get api_v1_people_url }

    it 'executes success' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns properly count of people' do
      expect(json['payload'].count).to eq 3
    end

    it 'returns properly list of people' do
      expect(json['payload'].pluck('id')).to match_array(people.map(&:id))
    end
  end

  describe 'POST /create' do
    let(:person_attributes) do
      {
        name: 'John Smith',
        phone: '+1(223)235-12-21',
        email: 'johnsmith@gmail.com',
        gender: 0,
        dob: '19-04-1988'
      }
    end

    before { post api_v1_people_url, params: { person: person_attributes } }

    it 'executes success' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns a new created person' do
      expect(json['payload']).to be_present
    end

    it 'returns a new created person ID' do
      expect(json['payload']['id']).to be_present
    end
  end

  describe 'PUT /update' do
    let(:person) { create(:person) }
    let(:url) { "#{api_v1_people_url}/#{person.id}" }
    let(:person_attributes) do
      {
        name: 'John Smith',
        phone: '+1(223)235-12-21',
        email: 'johnsmith@gmail.com',
        gender: 1,
        dob: '19-04-1988'
      }
    end

    before { put url, params: { person: person_attributes } }

    it 'executes success' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns an updated person' do
      expect(json['payload']).to be_present
    end

    it 'updates name value' do
      expect(json['payload']['name']).to eq person_attributes[:name]
    end

    it 'updates phone value' do
      expect(json['payload']['phone']).to eq person_attributes[:phone]
    end

    it 'updates email value' do
      expect(json['payload']['email']).to eq person_attributes[:email]
    end

    it 'updates gender value' do
      expect(json['payload']['gender']).to eq person_attributes[:gender]
    end

    it 'updates dob value' do
      expect(Date.parse(json['payload']['dob'])).to eq Date.parse(person_attributes[:dob])
    end

    context 'when a person not present' do
      let(:url) { "#{api_v1_people_url}/999999" }

      it 'does not execute success' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns an errors message' do
        expect(json['errors'][0]).to eq "Couldn't find Person with 'id'=999999"
      end
    end
  end

  describe 'DELETE /destroy' do
    let(:person) { create(:person) }
    let(:url) { "#{api_v1_people_url}/#{person.id}" }

    before { delete url }

    it 'executes success' do
      expect(response).to have_http_status(:ok)
    end

    it 'does not return an person' do
      expect(json['payload']).to be_blank
    end

    context 'when a person not present' do
      let(:url) { "#{api_v1_people_url}/999999" }

      it 'does not execute success' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns an errors message' do
        expect(json['errors'][0]).to eq "Couldn't find Person with 'id'=999999"
      end
    end
  end
end
