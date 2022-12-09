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
end
