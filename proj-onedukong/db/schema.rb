# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160829140131) do

  create_table "cafe_images", force: :cascade do |t|
    t.string   "image_url"
    t.integer  "cafe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "caves", force: :cascade do |t|
    t.string   "name"
    t.string   "region"
    t.string   "open_time"
    t.string   "phone"
    t.string   "price"
    t.string   "address"
    t.integer  "outlet_count"
    t.integer  "wifi_count"
    t.boolean  "outlet",       default: false
    t.boolean  "wifi",         default: false
    t.boolean  "quiet",        default: false
    t.boolean  "etc",          default: false
    t.boolean  "dessert",      default: false
    t.string   "comment"
    t.integer  "scrap_count"
    t.float    "lat"
    t.float    "lng"
    t.integer  "place_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "cafe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string   "name"
    t.string   "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "name"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
