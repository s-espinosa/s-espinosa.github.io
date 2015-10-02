class Player
  attr_reader :health, :name

  def name=(new_name)
    @name = new_name.capitalize
  end

  def initialize (name, health=100)
    @name = name.capitalize
    @health = health
    @found_treasures = Hash.new(0)
  end

  def score
    @health + points
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
    "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}"
  end

  def strong?
    @health > 100 ? true : false
  end

  def found_treasure(treasure)
    @found_treasures[treasure.name] += treasure.points
    puts "#{@name} found a #{treasure.name} worth #{treasure.points} points."
    puts "#{@name}'s treasures: #{@found_treasures}"
  end

  def points
    @found_treasures.values.reduce(0, :+)
  end

  def <=>(player2)
    player2.score <=> self.score
  end

end

if __FILE__ == $0 
  player = Player.new("moe")
  puts player.name
  puts player.health
  player.w00t
  puts player.health
  player.blam
  puts player.blam
end
