class GameAction
  def self.find name
    NextTurnAction.new
  end

end


class NextTurnAction
  def process game
    game.take_two_gems_of_same_color :ruby
  end
end