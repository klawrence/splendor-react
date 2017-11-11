json.array! @games do |game|
  json.extract! game, :name
  json.url game_path(game)
end
