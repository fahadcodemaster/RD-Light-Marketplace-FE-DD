import http from "../http";
const httpUrl = process.env.REACT_APP_DEVELOPMENT_URL;

export default class GetAllPopularCollections {
  static GetAllPopularCollectionsApi(body) {
    return http.get(
      httpUrl + "/api/v1/Nft/GetPopularNFtCollection"
    );
  }
}
