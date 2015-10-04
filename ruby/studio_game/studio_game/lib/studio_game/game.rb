require_relative "player"
require_relative "die"
require_relative "game_turn"
require_relative "treasure_trove"

module StudioGame
  class Game 
    ##ATTRIBUTES##
    attr_reader :title


    ##INITIALIZE AND BASIC INTERACTION##
    def initialize (title)
      @title = title
      @players = []
    end

    def to_s
      @title
    end

    def high_score_entry(player)
      player.name.ljust(15,".") + player.score.to_s 
    end


    ##GAME METHODS##
    def add_player(player)
      @players.push(player)
    end

    def load_players(from_file)
      File.readlines(from_file).each do |line|
        player = Player.from_csv(line)
        add_player(player)
      end
    end

    def save_high_scores(to_file = "high_scores.txt")
      File.open(to_file, "w") do |file|
        file.puts "#{title} High Scores:"
        @players.sort.each do |player|
          file.puts high_score_entry(player)
        end      
      end
    end

    def print_name_and_health(player)
      puts "#{player.name} (#{player.health})"
    end

    def play(rounds)
      #Load treasures from TreasureTrove module and print their values.
      treasures = TreasureTrove::TREASURES
      puts("\nThere are #{treasures.length} treasures to be found:")
      treasures.each do |treasure|
        puts "A #{treasure.name} is worth #{treasure.points} points"
      end
      puts "\n"

      #Display number of players in the game and show their current health.
      puts("There are #{@players.length} players in #{@title}:")
      @players.each do  |player|
        puts player
      end
      puts "\n"

      #Use GameTurn module to play the game and then print stats using the print_stats method.
      rounds.times do |round|
        puts "Round #{round+1}:"
        @players.each do |player|
          GameTurn.take_turn(player)
          puts player
          puts "\n"
        end
        puts "\n"
      end
      print_stats
    end

    def print_stats
      puts "#{@title} Statistics:\n"

      strong, wimpy = @players.partition {|player| player.strong?}

      puts "#{strong.length} strong players:"
      strong.each do |player|
        print_name_and_health(player)
      end

      puts "\n#{wimpy.length} wimpy players:"
      wimpy.each do |player|
        print_name_and_health(player)
      end

      puts "\n"
      @players.each do |player|
        puts"\n#{player.name}'s point totals:"
        player.each_found_treasure do |treasure|
          puts "#{treasure.name.capitalize} total #{treasure.points} points"
        end
        puts "#{player.points} grand total points"
      end

      puts "\n#{@title} High Scores:"
      @players.sort.each do |player|
        puts high_score_entry(player)
      end
      puts "\n\n"
    end
  end

  if __FILE__ == $0
    sample_game = Game.new("Sample")
    puts sample_game
    puts sample_game.title
    sample_game.add_player(Player.new("moe", 120))
    sample_game.play(2)
  end
end
