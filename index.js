//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

require("dotenv").config();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const server = require("./src/app.js");
const { conn, Raza, Temperament, Types, Genres, Platforms } = require('./src/db.js.js');
const dataVG = require('./src/controllers/functionsGetVideoG');

const {
  PORT,
  API_KEY_DOGS,
  API_KEY_OPCI1_FOODS,
  API_KEY_FOODS,
  API_KEY_VIDEOGAMES
} = process.env;


const bcrypt = require("bcryptjs");

async function preload() {
  // razas Dogs
  const dataBDR = await Raza.findAll({});
  const dataApiR = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY_DOGS}`);
  const dataApiFilt = dataApiR.data.map((e) => {
    return e.breed_group;
  });

  const resulFiltRaza = new Set(dataApiFilt);

  let resultFiltDupliRaza = [...resulFiltRaza];
  resultFiltDupliRaza = resultFiltDupliRaza.filter((e) => {
    return e !== "" && e !== undefined;
  });

  const dataInfoOrdRaza = resultFiltDupliRaza.map((e) => {
    return {
      name: e
    }
  });

  if (dataBDR.length === 0) {
    await Raza.bulkCreate(dataInfoOrdRaza);
  }

  //temperaments dogs
  const temperamentBd = await Temperament.findAll({});
  const getDataTempe = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY_DOGS}`);
  const datFilt = getDataTempe.data.map((e) => {
    return e.temperament
  }).toString();

  const resulFiltTempera = new Set(datFilt.split(',').sort());

  let resultFiltDupliTempera = [...resulFiltTempera];

  const dataInfoOrdTempera = resultFiltDupliTempera.map((e) => {
    return {
      name: e
    }
  });

  if (temperamentBd.length === 0) {
    await Temperament.bulkCreate(dataInfoOrdTempera.filter((e) => {
      return e.name !== "";
    }));
  };

  //tipo_dieta Foods
  const types = await Types.findAll({});
  const apiTypesResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY_FOODS}&addRecipeInformation=true`);
  let apiTypes = apiTypesResponse.data.results.map((type) => {
    return type.diets    
  });

  let apiTypesFil =[];
  
  for(var i=0; i<apiTypes.length; i++) {
    for(var j=0; j<apiTypes[i].length; j++) {
        apiTypesFil.push({
          ID: uuidv4(),
          Nombre:apiTypes[i][j]
        })
    }
  }
  
  var temp = {};
  apiTypesFil = apiTypesFil.filter(function(current) {
    var exists = !temp[current.Nombre];
    temp[current.Nombre] = true;
    return exists;
  });


  if (types.length === 0){
    await Types.bulkCreate(apiTypesFil);
  } 

  //generes
  const apiGenresInfo = await axios.get(
    ` https://api.rawg.io/api/genres?key=${API_KEY_VIDEOGAMES}`
  );

  const infoGenres = await apiGenresInfo.data.results.map((e) => {
    return { name: e.name };
  });
  
  const consultDb = await Genres.findAll();

  if (consultDb.length === 0) {
    await Genres.bulkCreate(infoGenres);
  }


  //plataforms
  const plataformas = await dataVG.apiInfo();
  const plat = plataformas.map((e) => e.platforms).flat();
  const tempV = plat.map((e) => e.platform);
  const plataformaFilter = tempV.map((e) => e.name);
  const filteredArray = plataformaFilter.filter((ele, pos) => {
    return plataformaFilter.indexOf(ele) == pos;
  });

  let platf = filteredArray.map((e) => {
    return { name: e };
  });

  const infoPlatfor = platf.map((e) => {
    return { name: e.name };
  });

  const consultDbV = await Platforms.findAll();
  if (consultDbV.length === 0) {
    await Platforms.bulkCreate(infoPlatfor);
  }

}



conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    preload();
    console.log(`%soy el mejor ${PORT}`); // eslint-disable-line no-console
  });
});
