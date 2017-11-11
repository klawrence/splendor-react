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

  test 'TAKE TURN takes three most plentiful gems' do
    player = @game.current_player

    @game.take_gem :sapphire
    @game.take_gem :diamond

    assert_equal 0, player.gems[:onyx]
    assert_equal 0, player.gems[:emerald]
    assert_equal 0, player.gems[:ruby]

    action = TakeTurnAction.new
    action.process @game

    assert_equal 1, player.gems[:onyx]
    assert_equal 1, player.gems[:emerald]
    assert_equal 1, player.gems[:ruby]
  end
end
