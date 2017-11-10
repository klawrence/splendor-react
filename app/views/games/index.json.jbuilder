json.array! @names do |name|
  json.name name
  json.url game_path(name)
end
