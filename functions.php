<?php

function paxform_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'paxform_load_assets');

function paxform_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'paxform_add_support');