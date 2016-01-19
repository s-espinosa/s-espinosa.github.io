class Player
  def initialize(name, health=100)
    @name = name.capitalize
    @health = health
  end

  attr_reader :health
  attr_accessor :name

  def to_s
    "I'm #{@name} with a health of #{@health} and a score of #{score}."
  end

  def score
    @health + @name.length
  end

  def w00t()
    @health = @health + 15
    puts "#{@name} got w00ted!"
  end

  def blam()
    @health = @health - 10
    puts "#{@name} got blammed!"
  end

  def strong?()
    @health > 100
  end

  def <=>(other)
    other.score <=> score
  end

end

if __FILE__ == $0
  player = Player.new("moe")
  puts player.name
  puts player.health
  player.w00t
  puts player.health
  player.blam
  puts player.health
end


