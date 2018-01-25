require 'rails_helper'

RSpec.describe Post, type: :model do
  subject do
    FactoryBot.create(:post)
  end

  describe 'validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :body }
  end
end
