module StudioGame
  module Playable
    def blam
      self.health -= 10
      puts "#{name} got blammed!"
      self.to_s
    end

    def w00t
      self.health += 15
      puts "#{name} got w00ted!"
      self.to_s
    end

    def strong?
      self.health > 100 ? true : false
    end
  end
end