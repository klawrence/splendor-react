require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test 'monkey patch games to have a name' do
    game = Splendor::Game.new
    game.name = 'game 1'

    assert_equal 'game 1', game.name
    assert_equal 'game-1', game.to_param
  end
end
