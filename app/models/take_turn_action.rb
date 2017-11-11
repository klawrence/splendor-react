class TakeTurnAction
  def process game
    player = game.current_player

    [3,2,1].each do |level|
      (0..3).each do |column|
        card = game.card_at level, column
        if player.can_afford? card
          game.buy_card 1, 1
          return
        end
      end
    end

    gems = game.gems.
        sort_by {|_gem, count| count}.
        reverse[0..2].
        map(&:first)
    game.take_three_gems gems
  end
end