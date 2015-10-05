require_relative "game"

describe Game do

  before do
    $stdout = StringIO.new

    @title = "Knuckleheads"
    @game = Game.new(@title)

    @initial_health = 100
    @player = Player.new("moe", @initial_health)

    @game.add_player(@player)
  end

  it "has a title" do
    expect(@game.title).to eq(@title)
  end

  it "w00ts the current player on a high die roll" do
    allow_any_instance_of(Die).to receive(:roll).and_return(5)
    @game.play(2)

    expect(@player.health).to eq(@initial_health + 15*2)
  end

  it "does nothing to the current player on a medium die roll" do
    allow_any_instance_of(Die).to receive(:roll).and_return(3)
    @game.play(2)

    expect(@player.health).to eq(@initial_health)
  end

  it "blams the current player on a low die roll" do
    allow_any_instance_of(Die).to receive(:roll).and_return(1)
    @game.play(2)

    expect(@player.health).to eq(@initial_health - 10*2)
  end

  it "assigns a treasure for points during a player's turn" do
    game = Game.new("Knuckleheads")
    player = Player.new("moe")
    
    game.add_player(player)

    game.play(1)

    expect(player.points).not_to eq(0)
  end

end
