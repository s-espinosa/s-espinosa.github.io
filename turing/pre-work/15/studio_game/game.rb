require_relative 'player'
require_relative 'die'
require_relative 'take_turn'

class Game
  def initialize(name)
    @name = name.capitalize
    @players = []
  end

  attr_reader :name

  def add_player(player)
    @players.push(player)
  end

  def play(num_rounds)
    puts "There are #{@players.length} players in #{@name}:"
    @players.each do |player|
      puts player
    end

    1.upto(num_rounds) do |current_round|
      puts "\nRound #{current_round}:"
      @players.each do |player|
        GameTurn.take_turn(player)
        puts player
      end
    end
  end

  def print_name_and_health(player)
    puts "#{player.name} (#{player.health})"
  end
  
  def print_stats()
    puts "\n#{@name} Statistics:"
    strong, weak = @players.partition {|player| player.strong?}

    puts "#{strong.length} strong players:"
    strong.each do |player|
      print_name_and_health(player)
    end

    puts "#{weak.length} weak players:"
    weak.each do |player|
      print_name_and_health(player)
    end
  end

  def print_scores()
    puts "\n#{@name} High Scores:"
    @players.sort.each do |player|
      puts "#{player.name}".ljust(15, ".") + " #{player.score}"
    end
    
  end

end

