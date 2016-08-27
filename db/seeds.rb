# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cafe.create(name: 'starbuks', region: 'sangok', open_time: '09:00~20:00', overnight: true, scrap_count: "3", lat: "323523.12325", lng: "12384028.123125412512")
Cafe.create(name: 'starbuks22', region: 'hongdea', open_time: '19:00~23:00', overnight: true, outlet: true, scrap_count: "4", lat: "323523.99325", lng: "12384028.1223325412512")
Cafe.create(name: 'starbuks33', region: 'sangok', open_time: '10:00~24:00', scrap_count: "9", lat: "32373.18325", lng: "1233028.12344412512")
Cafe.create(name: 'starbuks44', region: 'nowon', open_time: '11:00~22:00', outlet: true, scrap_count: "32333", lat: "35523.12325", lng: "12322028.123177512")
Cafe.create(name: 'starbuks55', region: 'nowon', open_time: '12:00~21:00', scrap_count: "311", lat: "3231233.12325", lng: "1111028.123125332512")
Cafe.create(name: 'breadone', region: 'sangok',  open_time: '12:00~23:00')
Like.create(cafe_id: 1, user_id: 1)
Like.create(cafe_id: 2, user_id: 1)
Like.create(cafe_id: 3, user_id: 1)