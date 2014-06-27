require 'spec_helper'

describe Movie do 
  describe 'searching for similar directors' do
    it 'should be able to call Movie find_similar' do
      Movie.should_receive(:find_similar).with('Blade Runner')
      Movie.find_similar('Blade Runner')
    end
  end
end