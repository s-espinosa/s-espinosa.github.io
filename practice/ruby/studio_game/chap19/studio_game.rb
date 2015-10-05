require_relative "game"
require_relative "player"
require_relative "clumsy_player"

knuckleheads = Game.new("Knuckleheads")
knuckleheads.load_players(ARGV.shift || "players.csv")

klutz = ClumsyPlayer.new("klutz", 105)
#berserker = BerserkPlayer.new("berserker" 50)

knuckleheads.add_player(klutz)
#knuckleheads.add_player(berserker)

loop do
  puts "\nHow many rounds? ('quit' to exit)"
  answer = gets.chomp.downcase
  case answer
    when /^\d+$/
      knuckleheads.play(answer.to_i)
    when "exit", "quit"
      break
    else
      puts "Please enter a number or 'exit'"
  end
end

knuckleheads.save_high_scores
