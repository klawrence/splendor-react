require 'test_helper'

class GameActionsTest < ActiveSupport::TestCase
  setup do
    @game = Splendor::Game.new
  end

  test 'TAKE TURN moves to next player' do
    action = GameAction.find 'TAKE TURN'
    action.process @game
    assert_equal @game.current_player, @game.players.second
  end
end
