import {Category} from '../models/pokemon/category';
import {BaseSprite, Sprites} from '../models/pokemon/pokedex';
import {NameWithUrl} from '../models/pokemon/species';

export const useGallery = () => {
  const getSubImageList = (sprite: BaseSprite): NameWithUrl[] => {
    const imageList: NameWithUrl[] = [];
    if (sprite?.front_default !== undefined) {
      imageList.push({
        url: sprite?.front_default,
        name: 'Front Default',
      });
    }

    if (sprite?.front_shiny !== undefined) {
      imageList.push({
        url: sprite?.front_shiny,
        name: 'Front Shinny',
      });
    }

    if (sprite?.back_default !== undefined) {
      imageList.push({
        url: sprite?.back_default,
        name: 'Back Default',
      });
    }

    if (sprite?.back_shiny !== undefined) {
      imageList.push({
        url: sprite?.back_shiny,
        name: 'Back Shinny',
      });
    }

    return imageList;
  };

  const getImageList = (sprites: Sprites): Category[] => {
    const list: Category[] = [];
    let sprite: Sprites | undefined = sprites.other?.['official-artwork'];
    let subImageList: NameWithUrl[] = [];

    sprite = sprites.other?.dream_world;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Dream World', data: subImageList});
      }
    }

    sprite = sprites.other?.['official-artwork'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Official Artwork', data: subImageList});
      }
    }

    sprite = sprites.other?.home;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Home', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-i'].yellow;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation I (Yellow)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-i']['red-blue'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation I (Red Blue)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-ii'].crystal;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation II (Crystal)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-ii'].gold;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation II (Gold)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-ii'].silver;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation II (Silver)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-iii'].emerald;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation III (Emerald)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-iii']['firered-leafgreen'];
    if (sprite !== undefined) {
      const fireRedLeafGreenList = getSubImageList(sprite);
      if (fireRedLeafGreenList.length > 0) {
        list.push({
          name: 'Generation III (Fire Red, Leaf Green)',
          data: fireRedLeafGreenList,
        });
      }
    }

    sprite = sprites.versions?.['generation-iii']['ruby-sapphire'];
    if (sprite !== undefined) {
      const subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation III (Ruby, Sapphire)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-iv']['diamond-pearl'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation IV (Diamond Pearl)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-iv']['heartgold-soulsilver'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation IV (Heart Gold, Soul Silver)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-iv'].platinum;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation IV (Platinum)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-v']?.['black-white'].animated;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({name: 'Generation V (Black White)', data: subImageList});
      }
    }

    sprite = sprites.versions?.['generation-vi']['omegaruby-alphasapphire'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation VI (Omega Ruby)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-vi']['x-y'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation VI (XY)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-vii'].icons;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation VII (Icons)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-vii']['ultra-sun-ultra-moon'];
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation VII (Ultra Sun, Ultra Moon)',
          data: subImageList,
        });
      }
    }

    sprite = sprites.versions?.['generation-viii'].icons;
    if (sprite !== undefined) {
      subImageList = getSubImageList(sprite);
      if (subImageList.length > 0) {
        list.push({
          name: 'Generation VIII (Icons)',
          data: subImageList,
        });
      }
    }

    return list;
  };
  return {getImageList};
};
