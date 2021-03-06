import { Injectable, isDevMode, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  head(url: string, params?: HttpParams, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    options.params = params;
    return this.http.head(url, options);
  }

  get(url: string, params?: HttpParams, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    options.params = params;
    return this.http.get(url, options);
  }

  delete(url: string, params?: HttpParams, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    options.params = params;
    return this.http.delete(url, options);
  }

  post(url: string, body: any | null, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    return this.http.post(url, body, options);
  }

  put(url: string, body: any | null, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    return this.http.put(url, body, options);
  }

  patch(url: string, body?: any, options?: any): Observable<any> {
    options = this.prepareOptions(options);
    return this.http.patch(url, body, options);
  }

  prepareOptions(options?: any): any {
    options = options || {};
    options.observe = 'response';
    options.headers = options.headers || new HttpHeaders();
    options.headers = options.headers.set('Accept', 'application/json');
    return options;
  }

  parsePaginationLink(link?: string): any {
    if (link) {
      const linkRe = /<([^>]+)>; rel="([^"]+)"/g;
      const pageRe = /(?:\?|&)page=(\d)+/;
      const urls = {};
      let m;
      while ((m = linkRe.exec(link)) !== null) {
        let url = m[1];
        if (!isDevMode()) {
          //// workaround for broken links- django returns http:// instead of https:// in prod
          //// causing mixed-mode content blocking errors
          url = url.replace('http://', 'https://');
        }
        urls[m[2]] = url;
      }
      return urls;
    } else {
      return {};
    }
  }

  agencies = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/agencies', params);
    },
    create: (data: any): Observable<any> => {
      return this.post(`/api/agencies`, data);
    },
    me: (params?: HttpParams): Observable<any> => {
      return this.get('/api/agencies/me', params);
    },
    validate: (subdomain: string): Observable<any> => {
      return this.get(`/api/agencies/validate`, new HttpParams().set('subdomain', subdomain));
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/agencies/${id}`, params);
    },
    check: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/agencies/${id}/check`, params);
    },
    claim: (id: string, data: any): Observable<any> => {
      return this.post(`/api/agencies/${id}/claim`, data);
    },
  };

  demographics = {
    agency: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/agency`, params);
      },
      update: (data: any): Observable<any> => {
        return this.put(`/api/demographics/agency`, data);
      },
    },
    configuration: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/configurations`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/configurations`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/configurations/${id}`, data);
      },
    },
    contacts: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/contacts`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/contacts`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/contacts/${id}`, data);
      },
    },
    customConfiguration: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/custom-configuration`, params);
      },
    },
    customResults: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/custom-results`, params);
      },
    },
    devices: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/devices`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/devices`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/devices/${id}`, data);
      },
    },
    facilities: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/facilities`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/facilities`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/facilities/${id}`, data);
      },
    },
    locations: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/locations`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/locations`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/locations/${id}`, data);
      },
    },
    personnel: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/personnel`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/personnel`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/personnel/${id}`, data);
      },
      invite: (data: any, subdomain?: string): Observable<any> => {
        const options = { headers: new HttpHeaders() };
        if (subdomain) {
          options.headers = options.headers.set('X-Agency-Subdomain', subdomain);
        }
        return this.post(`/api/demographics/personnel/invite`, data, options);
      },
      accept: (data: any, subdomain?: string): Observable<any> => {
        const options = { headers: new HttpHeaders() };
        if (subdomain) {
          options.headers = options.headers.set('X-Agency-Subdomain', subdomain);
        }
        return this.post(`/api/demographics/personnel/accept`, data, options);
      },
    },
    vehicles: {
      index: (params?: HttpParams): Observable<any> => {
        return this.get(`/api/demographics/vehicles`, params);
      },
      create: (data: any): Observable<any> => {
        return this.post(`/api/demographics/vehicles`, data);
      },
      update: (id: string, data: any): Observable<any> => {
        return this.put(`/api/demographics/vehicles/${id}`, data);
      },
    },
  };

  employments = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/employments', params);
    },
    approve: (id: string): Observable<any> => {
      return this.post(`/api/employments/${id}/approve`, {});
    },
    refuse: (id: string): Observable<any> => {
      return this.post(`/api/employments/${id}/refuse`, {});
    },
  };

  facilities = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/facilities', params);
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/facilities/${id}`, params);
    },
    geocode: (id: string): Observable<any> => {
      return this.post(`/api/facilities/${id}/geocode`, null);
    },
  };

  home = {
    contact: (data: any): Observable<any> => {
      return this.post('/contact-us', data);
    },
  };

  patients = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/patients', params);
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/patients/${id}`, params);
    },
    createOrUpdate: (data: any): Observable<any> => {
      return this.post(`/api/patients`, data);
    },
  };

  responders = {
    index: (sceneId: string, params?: HttpParams): Observable<any> => {
      params = params || new HttpParams();
      params = params.set('sceneId', sceneId);
      return this.get('/api/responders', params);
    },
    assign: (id: string, role: string): Observable<any> => {
      return this.patch(`/api/responders/${id}/assign`, { role });
    },
  };

  scenes = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/scenes', params);
    },
    create: (data: any): Observable<any> => {
      return this.post(`/api/scenes`, data);
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/scenes/${id}`, params);
    },
    update: (id: string, data: any): Observable<any> => {
      return this.patch(`/api/scenes/${id}`, data);
    },
    close: (id: string): Observable<any> => {
      return this.patch(`/api/scenes/${id}/close`);
    },
    join: (id: string): Observable<any> => {
      return this.patch(`/api/scenes/${id}/join`);
    },
    leave: (id: string): Observable<any> => {
      return this.patch(`/api/scenes/${id}/leave`);
    },
    transfer: (id: string, userId: string, agencyId: string): Observable<any> => {
      return this.patch(`/api/scenes/${id}/transfer`, { userId, agencyId });
    },
    addPin: (id: string, pin: any): Observable<any> => {
      return this.post(`/api/scenes/${id}/pins`, pin);
    },
    removePin: (id: string, pinId: string): Observable<any> => {
      return this.delete(`/api/scenes/${id}/pins/${pinId}`);
    },
  };

  states = {
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/states', params);
    },
    new: (params?: HttpParams): Observable<any> => {
      return this.get('/api/states/new', params);
    },
    create: (data: any): Observable<any> => {
      return this.post(`/api/states`, data);
    },
    configure: (id: string, params?: HttpParams): Observable<any> => {
      return this.post(`/api/states/${id}/configure`, params);
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/states/${id}`, params);
    },
    update: (id: string, data: any): Observable<any> => {
      return this.patch(`/api/states/${id}`, data);
    },
  };

  users = {
    me: (params?: HttpParams): Observable<any> => {
      return this.get('/api/users/me', params);
    },
    index: (params?: HttpParams): Observable<any> => {
      return this.get('/api/users', params);
    },
    get: (id: string, params?: HttpParams): Observable<any> => {
      return this.get(`/api/users/${id}`, params);
    },
    update: (id: string, data: any): Observable<any> => {
      return this.patch(`/api/users/${id}`, data);
    },
  };

  utils = {
    geocode: (lat: string, lng: string): Observable<any> => {
      let params = new HttpParams();
      params = params.set('lat', lat).set('lng', lng);
      return this.get(`/api/utils/geocode`, params);
    },
  };
}
