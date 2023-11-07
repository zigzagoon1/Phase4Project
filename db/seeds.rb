# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Grumpy Cat', photo_url: 'https://t2.gstatic.com/images?q=tbn:ANd9GcTUcK9akeUX3efOg5R35qL7Bi8DnlhB1u2jhiq9gTUMjw-VYMLsT1sDnRSxBy44YnwuMeiiiw', alt: "Grumpy Cat")
Cat.create(name: 'Happy Orange Kitty', photo_url: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*', alt: 'Happy Orange Kitty')
Cat.create(name: 'Jumping Cat', photo_url: 'https://cdn.theatlantic.com/thumbor/viW9N1IQLbCrJ0HMtPRvXPXShkU=/0x131:2555x1568/976x549/media/img/mt/2017/06/shutterstock_319985324/original.jpg', alt: 'Jumping Cat')
Cat.create(name: 'Meowing Cat', photo_url: 'https://www.treehugger.com/thmb/_fPHERNCmPBwsZkCq5GEG3giqTs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-593450425-5176c57c7b77417f9dd01dfb43827e7b.jpg', alt: 'Meowing Cat')

#User.create(name: "Kelly", username: "zigzag", password: "greenday", password_confirmation: "greenday")