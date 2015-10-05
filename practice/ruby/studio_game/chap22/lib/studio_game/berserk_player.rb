require_relative "player"

module StudioGame
  class BerserkPlayer < Player

    def initialize(name, health=100)
      super(name, health)
      @count_of_w00ts = 0
    end

    def berserk?
      @count_of_w00ts > 5
    end

    def w00t
      super
      @count_of_w00ts +=1
      puts "#{name} is berserk!" if berserk?
    end

    def blam
      if berserk?
        w00t
      else
        super
      end
    end
  end

  if __FILE__ == $0
    berserker = BerserkPlayer.new("berserker",50)
    6.times {berserker.w00t}
    2.times {berserker.blam}
    puts berserker.health
  end
end
