require_relative 'player'
require_relative 'die'

class Game
  def initialize(name)
    @name = name.capitalize
    @players = []
  end

  attr_reader :name

  def add_player(player)
    @players.push(player)
  end

  def play
    puts "There are #{@players.length} players in #{@name}:"
    @players.each do |player|
      puts player
    end
    @players.each do |player|
      player_die = Die.new

      case player_die.roll
      when 5, 6
        player.w00t
      when 3, 4
        puts "#{player.name} was skipped"
      else
        player.blam
      end

      puts player
    end
  end
end


