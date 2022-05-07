# store.rockstartgames.com-Backend-Clone

<h1>Documentation for API :-</h1>

<h2>Login</h2>

- https://obscure-citadel-15133.herokuapp.com/login

<h2>SignUp</h2>

- https://obscure-citadel-15133.herokuapp.com/register

<h2>Gears</h2>

- https://obscure-citadel-15133.herokuapp.com/gear  ->this route is for all data in gear
- https://obscure-citadel-15133.herokuapp.com/gear/apparel   ->this route is for apparel category data
- https://obscure-citadel-15133.herokuapp.com/gear/caps  ->this route is for caps category data
- https://obscure-citadel-15133.herokuapp.com/gear/posters  ->this route is for posters category data
- https://obscure-citadel-15133.herokuapp.com/gear/collectibles  ->this route is for collectibles category data  and  if you want more data than 6 use query size=numbers of data you want and you can use page query also . 
- example ->
 https://obscure-citadel-15133.herokuapp.com/gear/collectibles?page=1&size=6   ->like that its applys for all apis 

<h2>Games</h2>

- https://obscure-citadel-15133.herokuapp.com/games  -> this route is for all data of games by default it will give 4 data
if you want more data use query page and size  
- exmaple ->  https://obscure-citadel-15133.herokuapp.com/games?page=1&size=8
- This three routes will used in collection at the time of calling games 
- https://obscure-citadel-15133.herokuapp.com/games/red  -> this route is red dead games type data
- https://obscure-citadel-15133.herokuapp.com/games/grand  -> this route is grand theft auto  games type data
- https://obscure-citadel-15133.herokuapp.com/games/rock   -> this route is rockstart games type data

<h2>Collection</h2>

- https://obscure-citadel-15133.herokuapp.com/coll  -> this route is for all data in collections apparel and gear
- https://obscure-citadel-15133.herokuapp.com/coll/red/apparel  -> this route is for data of apparel category in red dead games
- https://obscure-citadel-15133.herokuapp.com/coll/red/gear  -> this route is for data of  gear or collectibles category in red dead games
- https://obscure-citadel-15133.herokuapp.com/coll/grand/apparel  ->this route is for data of apparel category in grand theft auto games
- https://obscure-citadel-15133.herokuapp.com/coll/grand/gear   -> this route is for data of  gear or collectibles category in grand theft auto  games
- https://obscure-citadel-15133.herokuapp.com/coll/rock/apparel   ->this route is for data of apparel category in rockstar  games
- https://obscure-citadel-15133.herokuapp.com/coll/rock/gear  > this route is for data of  gear or collectibles category in rockstar  games

