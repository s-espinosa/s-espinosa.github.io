require_relative 'player'
require_relative 'game'

knuckleheads = Game.new("Knuckleheads")
knuckleheads.load_players(ARGV.shift || "players.csv")

loop do
  puts "How many game rounds? ('quit' to exit)"
  answer = gets.chomp.downcase

  case answer
  when /^\d+$/
    knuckleheads.play(Integer(answer))
  when 'quit' || 'exit'
    knuckleheads.print_stats
    break
  else
    puts "Please put a number or exit:"
  end
end

knuckleheads.save_high_scores()
