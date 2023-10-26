# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Grumpy Cat', photo_url: 'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/367489162_879089540254425_1215583941238872993_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yA03nMY-8dEAX8Fo6X3&_nc_ht=scontent-iad3-1.xx&oh=00_AfCUMDw1hRMB42-kWx8hVEDfFW8Jw28BJur60e5HqIZyyA&oe=653DE516', alt: "Grumpy Cat")
Cat.create(name: 'Happy Orange Kitty', photo_url: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*', alt: 'Happy Orange Kitty')
Cat.create(name: 'Jumping Cat', photo_url: 'https://cdn.theatlantic.com/thumbor/viW9N1IQLbCrJ0HMtPRvXPXShkU=/0x131:2555x1568/976x549/media/img/mt/2017/06/shutterstock_319985324/original.jpg', alt: 'Jumping Cat')
Cat.create(name: 'Meowing Cat', photo_url: 'https://www.treehugger.com/thmb/_fPHERNCmPBwsZkCq5GEG3giqTs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-593450425-5176c57c7b77417f9dd01dfb43827e7b.jpg', alt: 'Meowing Cat')

User.create(name: "Kelly", username: "zigzag", password: "greenday", password_confirmation: "greenday")