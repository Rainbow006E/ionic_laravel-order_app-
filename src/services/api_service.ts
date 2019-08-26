import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Storage} from '@ionic/storage';
import {Subject} from 'rxjs';
import { HttpClient} from '@angular/common/http';



/**
 * Service for API access
 */
@Injectable()
export class APIService {
  rootUrl;
  rootUrl2;
  private addons1Url: string ="http://phpstack-160077-634448.cloudwaysapps.com/api/addonsets";
  private addons2Url: string ="http://phpstack-160077-634448.cloudwaysapps.com/api/addons";
  private areasUrl: string ="http://phpstack-160077-634448.cloudwaysapps.com/api/areas";
  private productsUrl: string="http://phpstack-160077-634448.cloudwaysapps.com/api/products";

  private categories;
  private addons;
  private restaurants;
  private settings;
  private delivery_areas;
  private cities;
  private token;
  private userData;
  private headers = null;
  private loginStatus$ = new Subject<boolean>();

  constructor(private http: Http,
              private https: HttpClient,
              private storage: Storage,
              private httpp: HttpClient
  ) {
    
    // this.rootUrl = 'http://localhost:8000/api/';
    this.rootUrl = 'http://phpstack-160077-634448.cloudwaysapps.com/api/';
    this.rootUrl2 = 'http://phpstack-160077-634448.cloudwaysapps.com/api/settings';
    // this.rootUrl = 'http://foodypoint.giraffy.tech/api/';
    // this.rootUrl = 'http://10.0.3.2:8000/api/';
    // this.rootUrl = 'http://192.168.8.100:8000/api/';
    this.categories = [];
    this.addons = [];
    this.restaurants = [];
    this.delivery_areas = [];
    this.token = null;
    this.userData = {
      id: null,
      city_id: null,
      name: '',
      phone: ''
    };
  }

  getOrderStatus(){
    console.log(this.rootUrl2);
    return this.https.get(this.rootUrl2)
    .do((res: Response) => console.log())
  }

  getAddons1(){
    console.log(this.addons1Url);
    return this.https.get(this.addons1Url)
    .do((res: Response) => console.log())
    
  }

  getAddons2(){
    console.log(this.addons2Url);
    return this.https.get(this.addons2Url)
    .do((res: Response) => console.log())
    
  }

  getProductsNew(){
    console.log(this.productsUrl);
    return this.https.get(this.productsUrl)
    .do((res: Response) => console.log())
    
  }

  getAreas(){
    return this.https.get(this.areasUrl)
    .do((res: Response) => console.log())
    
  }

  getLoginStatus() {
    return this.loginStatus$;
  }

  reloadCategories(restaurant_id): any {
    let url = `${this.rootUrl}categories`;
    if (restaurant_id) {
      url = `${url}?restaurant_id=${restaurant_id}`;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.categories = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  loadAddons(): any {
    console.log("add");
    let url = `${this.rootUrl}addons`;
    
    let promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.addons = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  reloadRestaurants(city_id): any {
    let url = `${this.rootUrl}restaurants`;
    if (city_id) {
      url = `${url}?city_id=${city_id}`;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.restaurants = response.json();
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  loadDeliveryAreas(city_id): any {
    console.log("test");
    let url = `${this.rootUrl}delivery_areas`;
    if (city_id) {
      url = `${url}?city_id=${city_id}`;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((response) => {
        this.delivery_areas = response.json();
        
        resolve();
      }, () => {
        reject();
      })
    });
    return promise;
  }

  getCategories() {
    return this.categories;
  }

 

  getRestaurants() {
    return this.restaurants;
  }

  getSettings(): any {
    return this.settings;
  }

  getDeliveryAreas() {
    return this.delivery_areas;
  }

  getCities() {
    return this.cities;
  }

  getToken() {
    return this.token;
  }

  getUserData() {
    return this.userData;
  }

  getProducts(category_id): any {
    let url = this.rootUrl + `products?category_id=${category_id}`;
    return this.http.get(url).toPromise();
  }

  getNews(page, city_id): any {
    let url = this.rootUrl + `news?page=${page}`;
    if (city_id) {
      url = `${url}&city_id=${city_id}`;
    }
    return this.http.get(url).toPromise();
  }

  createOrder(data): any {
    return this.http.post(`${this.rootUrl}create_order`, data, {
      headers: this.headers
    }).toPromise();
  }

  validateDiscount(data): any {
    return this.http.post(`${this.rootUrl}promo_codes/validate`, data).map((response) => {
      return response.json();
    });
  }

  setToken(v) {
    this.token = v;
    this.headers = new Headers({
      token: this.token
    });
  }

  isLoggedIn() {
    return (this.token != null && (this.settings.signup_required == 1));
  }

  init(): any {
    let serverFetched = false;
    
    this.storage.get('data').then((v) => {
      if (v && !serverFetched) {
        let data = JSON.parse(v);
        this.categories = data.categories;
        //this.addons = data.addons;
        this.settings = data.settings;
      }
    });
    this.storage.get('token').then((v) => {
      if (v) {
        this.setToken(v);
      }
    });
    this.storage.get('userData').then((v) => {
      if (v) {
        this.userData = JSON.parse(v);
      }
    }, (e) => {
    });
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}settings`).toPromise().then((response) => {
        serverFetched = true;
        let data = response.json();
        this.storage.set('data', JSON.stringify(data)).then(() => {
        }, () => {
        });
        this.categories = data.categories;
        //this.addons = data.addons;
        this.settings = data.settings;
        if (data.delivery_areas) {
          this.delivery_areas = data.delivery_areas;
        }
        if (data.cities) {
          this.cities = data.cities;
        }
        resolve();
      }, () => {
        reject();
      });
    });
    return promise;
  }

  signup(data: any): any {
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}customers`, data).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  login(email, password): any {
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.rootUrl}login`, {
        email: email,
        password: password
      }).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.token) {
          this.setToken(response.token);
          this.userData = response.customer;
          this.storage.set('token', response.token).then(() => {
          }, () => {
          });
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
          }, () => {
          });
          this.loginStatus$.next(true);
          resolve(response);
        }
        else {
          reject({});
        }
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  saveUserData(data: any) {
    let promise = new Promise((resolve, reject) => {
      this.http.put(`${this.rootUrl}customers/1`, data, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe(response => {
        if (response.success) {
          let reload = false;
          if (this.userData.city_id != response.customer.city_id) {
            reload = true;
          }
          this.userData = response.customer;
          this.storage.set('userData', JSON.stringify(response.customer)).then(() => {
            if (reload) {
              window['location'].reload();
            }
          }, () => {
          });
        }
        resolve(response);
      }, () => {
        reject({});
      });
    });
    return promise;
  }

  getOrders() {
    return this.http.get(`${this.rootUrl}orders`, {
      headers: this.headers
    }).map(response => {
      return response.json();
    });
  }

  loadUserData() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.rootUrl}me`, {
        headers: this.headers
      }).map(response => {
        return response.json();
      }).subscribe(response => {
        this.storage.set('userData', JSON.stringify(response)).then(() => {}, () => {});
        this.userData = response;
        resolve(response);
      }, () => {
        reject({});
      });
    });
  }
}