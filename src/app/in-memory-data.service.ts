import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Film} from './film';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const films = [
        {
          'id': 1,
          'title': 'Avatar',
          'year': '2009',
          'rated': 'PG-13',
          'released': '18 Dec 2009',
          'runtime': '162 min',
          'genre': 'Action, Adventure, Fantasy',
          'director': 'James Cameron',
          'writer': 'James Cameron',
          'actors': 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
          'plot': 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
          'language': 'English, Spanish',
          'country': 'USA, UK',
          'awards': 'Won 3 Oscars. Another 80 wins & 121 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
          'metascore': '83',
          'imdbRating': '7.9',
          'imdbVotes': '890,617',
          'imdbID': 'tt0499549',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
          ]
        },
        {
          'id': 2,
          'title': 'I Am Legend',
          'year': '2007',
          'rated': 'PG-13',
          'released': '14 Dec 2007',
          'runtime': '101 min',
          'genre': 'Drama, Horror, Sci-Fi',
          'director': 'Francis Lawrence',
          'writer': 'Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington',
          'actors': 'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
          'plot': 'years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
          'language': 'English',
          'country': 'USA',
          'awards': '9 wins & 21 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
          'metascore': '65',
          'imdbRating': '7.2',
          'imdbVotes': '533,874',
          'imdbID': 'tt0480249',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg'
          ]
        },
        {
          'id': 3,
          'title': '300',
          'year': '2006',
          'rated': 'R',
          'released': '09 Mar 2007',
          'runtime': '117 min',
          'genre': 'Action, Drama, Fantasy',
          'director': 'Zack Snyder',
          'writer': 'Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)',
          'actors': 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
          'plot': 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
          'language': 'English',
          'country': 'USA',
          'awards': '16 wins & 42 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
          'metascore': '52',
          'imdbRating': '7.7',
          'imdbVotes': '611,046',
          'imdbID': 'tt0416449',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg'
          ]
        },
        {
          'id': 4,
          'title': 'The Avengers',
          'year': '2012',
          'rated': 'PG-13',
          'released': '04 May 2012',
          'runtime': '143 min',
          'genre': 'Action, Sci-Fi, Thriller',
          'director': 'Joss Whedon',
          'writer': 'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
          'actors': 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
          'plot': 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
          'language': 'English, Russian',
          'country': 'USA',
          'awards': 'Nominated for 1 Oscar. Another 34 wins & 75 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
          'metascore': '69',
          'imdbRating': '8.1',
          'imdbVotes': '1,003,301',
          'imdbID': 'tt0848228',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg'
          ]
        },
        {
          'id': 5,
          'title': 'The Wolf of Wall Street',
          'year': '2013',
          'rated': 'R',
          'released': '25 Dec 2013',
          'runtime': '180 min',
          'genre': 'Biography, Comedy, Crime',
          'director': 'Martin Scorsese',
          'writer': 'Terence Winter (screenplay), Jordan Belfort (book)',
          'actors': 'Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey',
          'plot': 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
          'language': 'English, French',
          'country': 'USA',
          'awards': 'Nominated for 5 Oscars. Another 35 wins & 154 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
          'metascore': '75',
          'imdbRating': '8.2',
          'imdbVotes': '786,985',
          'imdbID': 'tt0993846',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg'
          ]
        },
        {
          'id': 6,
          'title': 'Interstellar',
          'year': '2014',
          'rated': 'PG-13',
          'released': '07 Nov 2014',
          'runtime': '169 min',
          'genre': 'Adventure, Drama, Sci-Fi',
          'director': 'Christopher Nolan',
          'writer': 'Jonathan Nolan, Christopher Nolan',
          'actors': 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
          'plot': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
          'language': 'English',
          'country': 'USA, UK',
          'awards': 'Won 1 Oscar. Another 39 wins & 134 nominations.',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
          'metascore': '74',
          'imdbRating': '8.6',
          'imdbVotes': '937,412',
          'imdbID': 'tt0816692',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
          ]
        },
        {
          'id': 7,
          'ComingSoon': true,
          'title': 'Doctor Strange',
          'year': '2016',
          'rated': 'N/A',
          'released': '04 Nov 2016',
          'runtime': 'N/A',
          'genre': 'Action, Adventure, Fantasy',
          'director': 'Scott Derrickson',
          'writer': 'Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)',
          'actors': 'Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton',
          'plot': 'After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
          'language': 'English',
          'country': 'USA',
          'awards': 'N/A',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
          'metascore': 'N/A',
          'imdbRating': 'N/A',
          'imdbVotes': 'N/A',
          'imdbID': 'tt1211837',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg'
          ]
        },
        {
          'id': 8,
          'ComingSoon': true,
          'title': 'Rogue One: A Star Wars Story',
          'year': '2016',
          'rated': 'N/A',
          'released': '16 Dec 2016',
          'runtime': 'N/A',
          'genre': 'Action, Adventure, Sci-Fi',
          'director': 'Gareth Edwards',
          'writer': 'Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)',
          'actors': 'Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn',
          'plot': 'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
          'language': 'English',
          'country': 'USA',
          'awards': '1 nomination.',
          'poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          'metascore': 'N/A',
          'imdbRating': 'N/A',
          'imdbVotes': 'N/A',
          'imdbID': 'tt3748528',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg'
          ]
        },
        {
          'id': 9,
          'ComingSoon': true,
          'title': 'Assassin\'s Creed',
          'year': '2016',
          'rated': 'N/A',
          'released': '21 Dec 2016',
          'runtime': 'N/A',
          'genre': 'Action, Adventure, Fantasy',
          'director': 'Justin Kurzel',
          'writer': 'Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)',
          'actors': 'Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons',
          'plot': 'When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.',
          'language': 'English',
          'country': 'UK, France, USA, Hong Kong',
          'awards': 'N/A',
          'poster': 'http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg',
          'metascore': 'N/A',
          'imdbRating': 'N/A',
          'imdbVotes': 'N/A',
          'imdbID': 'tt2094766',
          'type': 'movie',
          'response': 'True',
          'images': [
            'https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg',
            'https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg'
          ]
        }
      ]
    ;
    return {films};
  }

  genId(films: Film[]): number {
    return films.length > 0 ? Math.max(...films.map(film => film.id)) + 1 : 11;
  }
}