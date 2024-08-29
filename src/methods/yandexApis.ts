import { GeoLocationStateType } from "@/store/slices/locationSlice";

//Geocoder types
type YandexGeocoderRequest = {
  baseUrl: string; //base url of geocoder API
  apikey: string; //Required parameter. The client key issued
  geocode: string; //Required parameter. Address or coordinates of the object being searched for.
  lang: string;
  params?: {
    key:
      | "sco" //Only if the geocode parameter sets the coordinates. Order of coordinates.
      /*Possible values:
      longlat — Longitude, latitude.
      latlong — Latitude, longitude.
      Default value: longlat.*/
      | "kind" //Only if the geocode parameter sets the coordinates. The type of required toponym.
      /*List of accepted values:
      house — house
      street — street
      metro — subway station
      district — city district
      locality — locality (city, town, village, etc.)
      If omitted, the API will choose the toponym type automatically.*/
      | "results" //Maximum number of objects to be returned.
      | "uri" //Additional information about the object.
      | "format"; //Geocoder's response format — json
    value: string | boolean | number;
  }[];
};
type YandexGeocoderResponse = {
  //Geocoder's response.
  response: {
    //Main collection of geo objects.
    GeoObjectCollection: {
      //Metadata of the collection of geo objects.
      metaDataProperty: {
        //Information about the request and the number of toponyms found. Inside this object there can be fields:
        GeocoderResponseMetaData: {
          fix?: string; //a character corrected by the spelling service.
          request?: string; //requested address.
          suggest?: string; //variant of response corrected by the correction service.
          found?: string; //number of toponyms found.
          results?: string; //number of requested search results.
          skip?: string; //shows how many results to skip in the service response (from the beginning of the list).
        };
      };
      featureMember: {
        GeoObject: {
          metaDataProperty: {
            GeocoderMetaData: {
              kind:
                | "house" //a detached house
                | "street" //street
                | "metro" //subway station
                | "district" //city district
                | "locality" //locality: city, town, village, etc.
                | "area" //regional district (oblast)
                | "province" //oblast, region
                | "country" //country
                | "hydro" //river, lake, stream, reservoir, etc.
                | "vegetation" //forest, park, orchard, etc.
                | "airport" //airport
                | "other";
              precision?:
                | "exact" //A found building has the specified house number.
                | "number" //A found building has the specified house number, but a different building or unit number.
                | "near" //A found building has a house number close to the requested address.
                | "range" //Found approximate coordinates of the requested building.
                | "street" //Only the street was found.
                | "other"; //The street name does not match, but a village, district, etc. matches.
              Address: {
                country_code: string;
                formatted: string;
                Components: {
                  //Address component name.
                  name: string;
                  //Address component type. Two components with the same kindparameter values but different namevalues may be returned.
                  kind:
                    | "country" // — country
                    | "region" // — region
                    | "province" // — province
                    | "area" // — regional district
                    | "locality" // — locality
                    | "district" // — district, microdistrict, village
                    | "street" // — street
                    | "house" // — house
                    | "hydro" // — river, lake, reservoir, etc.
                    | "station" // — public transport stop
                    | "metro_station" // — metro station
                    | "railway_station" // — railway station
                    | "route" // — metro line, highway, railway line
                    | "vegetation" // — forest, park, garden, etc.
                    | "airport" // — airport
                    | "other" // — other
                    | "entrance" // — entrance
                    | "level" // — floor
                    | "apartment" // — apartment
                    | "unknown"; // — none of the above
                }[];
              };
            };
          };
          name: string; //The text that is recommended to be specified as a title when displaying the found object.
          description: string; //The text that is recommended to be specified as a subtitle when displaying the found object.
          boundedBy: string; //The boundaries of the area in which the company belongs. Contains the coordinates of the lower left and upper right corners of the area. The coordinates are listed in the sequence "longitude, latitude".
          uri: string; //ID of the found object.
          Point: {
            pos: string; //Coordinates of the geo object.
          };
        };
      }[];
    };
  };
};

//Geosuggest types
type YandexGeosuggestRequest = {
  baseUrl: string; //base url of geosuggest API
  apikey: string; //Required parameter. The client key issued
  text: string; //Required parameter. User input (prefix). A non-empty UTF-8 encoded string.
  lang: string; //Response language in the format of a two-letter ISO 639-1 code.
  //Additional params
  params?: {
    key:
      | "results" //Maximum number of hints. An integer up to 10. The default value is results=7.
      | "highlight" //By default, the service highlights matches in the results and returns a set of index ranges that can be highlighted in the interface. The highlight=0 value disables highlighting.
      | "ll" //The coordinates of the center of the search window if it is set as a rectangle with the coordinates of the center and a specified size. The {lon},{lat} format is used
      | "spn" //The width and height of the search window in degrees if it is set as a rectangle with the coordinates of the center and a specified size. The values are separated by a comma, no space.
      | "bbox" //The coordinates of the lower-left and upper-right corners of the search window if it is set using the coordinates of opposite corners.
      | "ull" //User's GPS coordinates (geolocation) Used to calculate distances.
      | "strict_bounds" //The value strict_bounds=1 is used to strictly limit the output and keep only objects that fall within the window. The window is advisory in nature and doesn't impose strict restrictions on search results, helping to select the most relevant hints.
      | "types" //Sets the type of object in the response. Types are separated by a comma, no space.
      /*
        Supported types:
        biz — all organizations
        geo — all geographical objects
        street — street
        metro — subway station
        district — district, microdistrict, village
        locality — village, town, residential complex, cottage settlement, gardening cooperative
        area — regional district
        province — province, administrative district, federal city
        country — country
        house — house, building, unit
        */
      | "print_address" //Returns a post-component address in the response. To do this, use the value print_address=1.
      | "org_address_kind" //Returns a list of organizations with an address up to the house number. To do this, use the value org_address_kind=house. The parameter can be used on its own or together with types=biz or any other object type that returns an address in the response.
      | "attrs"; //Used in the value attrs=uri. Returns the uri parameter in the response, the value of which can be used in the Geocoder API request to get additional information about the object.
    value: string;
  }[];
};
type YandexGeosuggestResponse = {
  //Request results in the form of an array of objects. If nothing was found, the parameter may be omitted.
  results: {
    //Object name.
    title: {
      //Object name.
      text: string;
      //Highlights the fragment of the text string in the interface that matches the user request.
      hl: {
        //Start of the range of symbol indexes in the text string for highlighting.
        begin: string;
        //End of the range of symbol indexes in the text string for highlighting.
        end: string;
        //Indexes are specified as numbers of the UTF-16 encoded 16-bit code units in the string.
      }[];
    };
    //Additional object name.
    subtitle: {
      //Object name.
      text: string;
      //Highlights the fragment of the text string in the interface that matches the user request.
      hl: { begin: string; end: string }[];
    };
    //Object type:
    tags: string[];
    //Distance to the object in meters.
    //Calculated based on user coordinates indicated in the request
    //Or the center of the search window if user coordinates are not set
    distance: {
      //Localized representation
      text: string;
      //Distance in meters.
      value: string;
    };
    //Object's address.
    address: {
      //Object's address.
      formatted_address: string;
      //Address components.
      component: {
        //Address component name.
        name: string;
        //Address component type. Two components with the same kindparameter values but different namevalues may be returned.
        kind:
          | "country" // — country
          | "region" // — region
          | "province" // — province
          | "area" // — regional district
          | "locality" // — locality
          | "district" // — district, microdistrict, village
          | "street" // — street
          | "house" // — house
          | "hydro" // — river, lake, reservoir, etc.
          | "station" // — public transport stop
          | "metro_station" // — metro station
          | "railway_station" // — railway station
          | "route" // — metro line, highway, railway line
          | "vegetation" // — forest, park, garden, etc.
          | "airport" // — airport
          | "other" // — other
          | "entrance" // — entrance
          | "level" // — floor
          | "apartment" // — apartment
          | "unknown"; // — none of the above
      }[];
    };
    //Additional information about the object that can be used in a request to the Geocoder API — to do this, specify the value of the uri parameter instead of text and coordinates.
    uri: string;
  }[];
};

const composeGeocoderRequestUrl = (
  requestObject: YandexGeocoderRequest
): string => {
  let composedURL =
    requestObject.baseUrl +
    "?apikey=" +
    requestObject.apikey +
    "&geocode=" +
    requestObject.geocode +
    "&lang=" +
    requestObject.lang;
  requestObject.params?.forEach((param) => {
    composedURL += "&" + param.key + "=" + param.value;
  });
  return composedURL;
};

const composeGeosuggestRequestUrl = (
  requestObject: YandexGeosuggestRequest
): string => {
  let composedURL =
    requestObject.baseUrl +
    "?apikey=" +
    requestObject.apikey +
    "&text=" +
    requestObject.text +
    "&lang=" +
    requestObject.lang;
  requestObject.params?.forEach((param) => {
    composedURL += "&" + param.key + "=" + param.value;
  });
  return composedURL;
};

export const fetchGeosuggest = async (locale: string, text: string) => {
  const url = composeGeosuggestRequestUrl({
    baseUrl: "https://suggest-maps.yandex.ru/v1/suggest",
    apikey: import.meta.env.VITE_YANDEX_GEOSUGGEST_API_KEY,
    text: text,
    lang: locale,
    params: [
      { key: "attrs", value: "uri" },
      { key: "results", value: "7" },
      { key: "print_address", value: "1" },
    ],
  });
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json: YandexGeosuggestResponse) => {
      return [
        ...json.results.map((result) => {
          return {
            title: result.title.text,
            subtitle: result.subtitle.text,
            uri: result.uri,
          };
        }),
      ];
    });
};

export const fetchGeocoder = async (
  locale: string,
  text: string,
  uri?: string | undefined
) => {
  console.log(uri);
  const url = composeGeocoderRequestUrl({
    baseUrl: "https://geocode-maps.yandex.ru/1.x/",
    apikey: import.meta.env.VITE_YANDEX_GEOCODER_API_KEY,
    geocode: text,
    lang: locale,
    params: [
      { key: "results", value: "1" },
      { key: "format", value: "json" },
      uri ? { key: "uri", value: uri } : { key: "kind", value: "house" },
    ],
  });
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json: YandexGeocoderResponse) => {
      return json.response.GeoObjectCollection.featureMember.map((object) => {
        return {
          available: true,
          address: {
            formattedAdress:
              object.GeoObject.metaDataProperty.GeocoderMetaData.Address
                .formatted,
            country:
              object.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
                (component) => component.kind === "country"
              )?.name,
            city: object.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
              (component) => component.kind === "locality"
            )?.name,
            street:
              object.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
                (component) => component.kind === "street"
              )?.name,
            house:
              object.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
                (component) => component.kind === "house"
              )?.name,
          },
          latLong: {
            longitude: object.GeoObject.Point.pos.split(" ")[0],
            latitude: object.GeoObject.Point.pos.split(" ")[1],
          },
        } as GeoLocationStateType;
      });
    });
};
