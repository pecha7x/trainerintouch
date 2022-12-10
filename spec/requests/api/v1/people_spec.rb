require 'rails_helper'

RSpec.describe 'Api::V1::People' do
  describe 'GET /index' do
    let!(:people) { create_list(:person, 3) }

    before { get api_v1_people_path }

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
    let(:params) do
      {
        name: 'John Smith',
        phone: '+1(223)235-12-21',
        email: 'johnsmith@gmail.com',
        gender: 0,
        dob: '19-04-1988'
      }
    end

    before { post api_v1_people_path, params: params }

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
end
