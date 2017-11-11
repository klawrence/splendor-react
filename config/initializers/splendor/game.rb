module Splendor
  class Game
    attr_accessor :name

    def to_param
      return 'unknown' unless name
      name.parameterize
    end
  end
end