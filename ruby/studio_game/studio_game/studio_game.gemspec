Gem::Specification.new do |s|
  s.name         = "see_prag_studio_game"
  s.version      = "1.0.1"
  s.author       = "Sal Espinosa"
  s.email        = "sespinos@gmail.com"
  s.homepage     = "http://www.sespinos.net"
  s.summary      = "Completed tasks from the Pragmatic Studio Ruby course"
  s.description  = File.read(File.join(File.dirname(__FILE__), 'README'))
  s.licenses     = ['MIT']

  s.files         = Dir["{bin,lib,spec}/**/*"] + %w(LICENSE README)
  s.test_files    = Dir["spec/**/*"]
  s.executables   = [ 'studio_game' ]

  s.required_ruby_version = '>=1.9'
  s.add_development_dependency 'rspec'
end
