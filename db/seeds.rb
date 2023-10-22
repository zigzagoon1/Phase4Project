# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Grumpy Cat', photo_url: '../client/public/images/grumpycat.jpeg', alt: "Grumpy Cat")
Cat.create(name: 'Happy Orange Kitty', photo_url: '../client/public/images/cute-orange-cat.jpg', alt: "Happy Orange Kitty")
Cat.create(name: 'Embarassed Cat', photo_url: '../client/public/images/cute-embarassed-cat.jpg', alt: 'Embarassed Cat')
Cat.create(name: 'Sphynx', photo_url: '../client/public/images/Sphynx.2.jpg', alt: 'Sphynx')