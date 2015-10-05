class Player
  attr_reader :health, :name

  def name=(new_name)
    @name = new_name.capitalize
  end

  def initialize (name, health=100)
    @name = name.capitalize
    @health = health
  end

  def score
    @health + @name.length
  end

  def blam
    @health -= 10
    puts "#{@name} got blammed!"
    self.to_s
  end

  def w00t
    @health +=15
    puts "#{@name} got w00ted!"
    self.to_s
  end

  def to_s
    "I'm #{@name} with a health of #{@health} and a score of #{score}"
  end
end

player1 = Player.new("Moe")
player2 = Player.new("Larry", 60)
player3 = Player.new("Curly", 125)

players = [player1, player2, player3]
puts "There are #{players.length} players in the game: "
players.each do |player|
  puts player
end

players.each do |player|
  puts player.health
end

players.each do |player|
  player.blam
  player.w00t
  player.w00t
  puts player
end

players.pop
players.push(Player.new("Shemp", 90))

players.each do |player|
  puts player
end
