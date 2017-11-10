require 'test_helper'

class GameRepositoryTest < ActiveSupport::TestCase
  setup do
    @repository = GameRepository.instance
  end

  test 'can start a game' do
    game = @repository.start_game
    assert_equal 4, game.players.count
  end
end
