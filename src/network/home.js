import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeRecommendDB() {
  return request({
    url: '/pop/recommendDB'
  })
}

export function getHomeCategory() {
  return request({
    url: '/category'
  })
}

export function getHomeCategory3627() {
  return request({
    url: '/subcategory3627'
  })
}

export function getHomeSubcategory582() {
  return request({
    url:'/subcategory582'
  })
}
