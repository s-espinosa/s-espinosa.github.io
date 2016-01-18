class Die
  def initialize
    roll
  end

  attr_reader :number

  def roll
    @number = rand(1..6)
  end
end
