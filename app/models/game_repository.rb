require 'singleton'

class GameRepository
  include Singleton

  def initialize
    @games = {}
  end

  def start_game
    name = "game #{@games.count + 1}"
    @games[name] = Splendor::Game.new
  end
end
