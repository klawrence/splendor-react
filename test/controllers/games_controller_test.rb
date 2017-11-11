require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @repository = GameRepository.instance
    @repository.clear
    @game = @repository.start_game
  end

  test 'should load react app' do
    get games_url()
    assert_response :success
  end

  test 'should get list of games' do
    get games_url(format: :json)
    assert_response :success
    json = JSON.parse response.body

    assert_equal 1, json.count
    assert_equal 'game 1', json.first['name']
    assert_equal '/games/game-1', json.first['url']
  end

  test 'should create game' do
    assert_difference('@repository.count') do
      post games_url(format: :json)
    end
  end

  test 'should show game' do
    get game_url(@game, format: :json)
    assert_response :success
    json = JSON.parse response.body

    assert_equal 4, json['players'].count
    assert_equal 3, json['cards'].count
    assert_equal 6, json['gems'].count
    assert_equal 5, json['nobles'].count
  end

  test 'should show whose turn it is' do
    assert_equal @game.players.first, @game.next_player

    get game_url(@game, format: :json)
    assert_response :success
    json = JSON.parse response.body

    assert json['players'].first['my_turn']
    refute json['players'].second['my_turn']
  end

  test 'should destroy game' do
    assert_difference('@repository.count', -1) do
      delete game_url(@game, format: :json)
    end

    assert_response :no_content
  end
end
