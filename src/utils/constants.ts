import {Dimensions} from 'react-native';

export const firstPage = 0;
export const defaultTake = 20;
export const maxTake = 999999;
export const pokemonImgBaseUrl = 'https://img.pokemondb.net/artwork/large/';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

//Due to api not providing max statistic
export class MaxStat {
  static hp = 255;
  static attack = 190;
  static defense = 250;
  static specialAttack = 194;
  static specialDefense = 250;
  static speed = 200;

  static getMaxStats(name: string): number {
    switch (name) {
      case 'hp':
        return this.hp;
      case 'attack':
        return this.attack;
      case 'defense':
        return this.defense;
      case 'special-attack':
        return this.specialAttack;
      case 'special-defense':
        return this.specialDefense;
      case 'speed':
        return this.speed;
      default:
        return this.hp;
    }
  }
}
