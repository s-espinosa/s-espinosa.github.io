require_relative "player"
require_relative "die"

class Game 
  attr_reader :title

  def initialize (title)
    @title = title
    @players = []
  end

  def to_s
    @title
  end

  def add_player(player)
    @players.push(player)
  end

  def play
    puts("There are #{@players.length} players in #{@title}:")
    @players.each do  |player|
      @new_die = Die.new
      die_value = @new_die.roll

      case die_value
        when(5..6)
          player.w00t
        when(3..4)
          #do nothing
        when(1..2)
          player.blam
      end

      puts player
    end
  end
end

if __FILE__ == $0
  sample_game = Game.new("Sample")
  puts sample_game
  puts sample_game.title
  sample_game.add_player(Player.new("moe", 120))
  sample_game.play
end
